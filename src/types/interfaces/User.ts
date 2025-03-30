import { AddUserResponse, LoginResponse } from "./ApiResponse";
import { Role } from "./Role";

export interface AuthData {
    role: Role;
    isAuthenticated?: boolean;
}

export type User = AddUserResponse;

export type CurrentUser = User & AuthData & Omit<LoginResponse, "user">;
