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
import RulesPage from "./pages/app/rules";
import HistoryPage from "./pages/app/history";
import UserProfilePage from "./pages/app/profile";
import ForgotPasswordPage from "./pages/app/forgot-password";
import ConnectServerPage from "./pages/app/connect-serve";
import CheckoutPage from "./pages/app/checkout";
import AccountVerificationPage from "./pages/app/account-verification";
import ExampleUsage from "./components/modals/example-usage";
import ReportsPage from "./pages/app/reports";
import ServersPage from "./pages/app/servers";
import AutomationsPage from "./pages/app/automations";
import CampaignsPage from "./pages/app/compaigns";
import AnalyticsPage from "./pages/app/analytics";

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
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
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
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
      {
        path: "/connect-server",
        element: <ConnectServerPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/verification",
        element: <AccountVerificationPage />,
      },
      {
        path: "/examples-modals",
        element: <ExampleUsage />,
      },
      {
        path: "/reports",
        element: <ReportsPage />,
      },
      {
        path: "/servers",
        element: <ServersPage />,
      },
      {
        path: "/automations",
        element: <AutomationsPage />,
      },
      {
        path: "/campaigns",
        element: <CampaignsPage />,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
    ],
  },
]);
