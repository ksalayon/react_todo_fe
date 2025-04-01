import { LoginResponse } from "./ApiResponse";

export type CurrentUser = LoginResponse & { isAuthenticated?: boolean };
