import { createBrowserRouter } from "react-router";

import { Layout } from "./pages/_layouts/";
import NotFound from "./pages/404";
import Dashboard from "./pages/app/dashboard";
import PlansPage from "./pages/app/plans";
import LandingPage from "./pages/app/landing";
import Error from "./pages/error";
import UsersPage from "./pages/app/users";
import LoginPage from "./pages/app/login";
import SignupPage from "./pages/app/signup";
import SettingsPage from "./pages/app/settings";
import RulesPage from "./pages/rules";
import HistoryPage from "./pages/history";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sigup",
    element: <SignupPage />,
  },
  {
    path: "plans",
    element: <PlansPage />,
  },
  {
    path: "/app",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "rules",
        element: <RulesPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
]);
