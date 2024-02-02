import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/Profile";
import Projects from "./pages/Main";
import CreateProject from "./pages/Create";
import CollectionPage from "./pages/Collection";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/new", element: <CreateProject /> },
      { path: "/projects/:projectId", element: <CollectionPage /> },
    ],
  },
];

export default routes;
