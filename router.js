import Layout from "./src/components/Layout/Layout";
import HomePage from "./src/pages/Home";
import LoginPage from "./src/pages/Login";
import MainPage from "./src/pages/Main";
import ProfilePage from "./src/pages/Profile";
import CreatePage from "./src/pages/Create";
import CollectionPage from "./src/pages/Collection";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/login", element: <LoginPage />},
      { path: "/profile", element: <ProfilePage />},
      { path: "/projects", element: <MainPage />},
      { path: "/projects/new", element: <CreatePage />},
      { path: "/projects/:projectId", element: <CollectionPage />},
    ],
  },
];

export default routes;
