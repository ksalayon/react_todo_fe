import { AddUserResponse } from "./ApiResponse";

export interface AuthData {
    role: Role;
    isAuthenticated?: boolean;
}

export type User = AddUserResponse;

export type CurrentUser = User & AuthData;

export type Role = "user" | "admin" | "moderator";
