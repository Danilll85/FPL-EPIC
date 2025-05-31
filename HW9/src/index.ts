import { UserRole } from "./types/UserRoleType";
import { getAllowedRouters } from "./utils/getAllowedRoutes";

const user1: UserRole = {
    name: 'Danila',
    role: 'user'
}

const routes = getAllowedRouters(user1.role);
console.log(routes);
