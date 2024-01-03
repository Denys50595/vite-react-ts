import { Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import UserDetails from "./pages/Users/UserDetails";
import Users from "./pages/Users/Users";

export enum RoutesPath {
  Start = "/",
  Users = "/users/",
  UserDetails = "/users/:id",
  NotFound = "*",
}

export const MainRoutes = [
  {
    path: RoutesPath.Start,
    component: <Navigate to="/users" replace={true} />,
  },
  {
    path: RoutesPath.Users,
    component: <Users />,
  },
  {
    path: RoutesPath.UserDetails,
    component: <UserDetails />,
  },
  {
    path: RoutesPath.NotFound,
    component: <PageNotFound />,
  },
];
