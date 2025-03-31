import { Role } from "./Role";

export interface AddUserResponse {
    id: number;
    name: string;
    email: string;
}

export type FetchUsersResponse = AddUserResponse[];

export interface ApiErrorResponse {
    response?: { data?: { message?: string } };
}

export interface LoginResponse extends AddUserResponse {
    slt: string;
    user: AddUserResponse & { role: Role };
}
