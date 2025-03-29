import { AddUserResponse, LoginResponse } from "./ApiResponse";

export interface AuthData {
    role: Role;
    isAuthenticated?: boolean;
}

// export interface AddUserResponse {
//     id: number;
//     name: string;
//     email: string;
// }
export type User = AddUserResponse;

// {
//     id: number;
//     name: string;
//     email: string;
//     role: Role;
//     isAuthenticated?: boolean;
//     stl: string
// }
export type CurrentUser = User & AuthData & Omit<LoginResponse, "user">;

export type Role = "user" | "admin" | "moderator";
