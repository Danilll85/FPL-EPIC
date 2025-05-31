import { PageRoute } from "../types/PageRouteType";
import { UserRole } from "../types/UserRoleType";

const COMMON_ROUTES: PageRoute[] = ["/dashboard", "/settings"];

export const getAllowedRoutes = (role: UserRole): PageRoute[] => {
  if (!role) return [];

  switch (role) {
    case "admin":
      return [...COMMON_ROUTES, "/backups", "/moderate"];
    case "user":
      return [...COMMON_ROUTES, "/profile", "/posts"];
    default:
      return [];
  }
};
