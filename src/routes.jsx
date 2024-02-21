import { Navigate, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/Profile";
import Projects from "./pages/Projects";
import CreateProject from "./pages/Create";
import CollectionPage from "./pages/Collection";
import useAuthStore from "./stores/useAuthStore";
import useAuthStatus from "./hooks/useAuthStatus";
import Loading from "./components/shared/Loading";

function PrivateRoute() {
  const { isLoading } = useAuthStatus();
  const { userInfo } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
}

function PublicRoute() {
  const { isLoading } = useAuthStatus();
  const { userInfo } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }

  return userInfo ? <Navigate to="/" replace /> : <Outlet />;
}

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/loading", element: <Loading /> },
      {
        element: <PublicRoute />,
        children: [{ path: "/login", element: <Login /> }],
      },
      {
        element: <PrivateRoute />,
        children: [
          { path: "/profile", element: <UserProfile /> },
          { path: "/projects", element: <Projects /> },
          { path: "/projects/new", element: <CreateProject /> },
          { path: "/projects/:projectId", element: <CollectionPage /> },
        ],
      },
    ],
  },
];

export default routes;
