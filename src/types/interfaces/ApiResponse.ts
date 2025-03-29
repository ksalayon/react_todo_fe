import { Role } from "./User";

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
    stl: string;
    user: AddUserResponse & { role: Role };
}
