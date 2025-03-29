export interface AddUserRequest {
    name: string;
    email: string;
    password: string;
}

export type LoginRequest = Omit<AddUserRequest, "name">;

export interface SignupRequest extends AddUserRequest {
    confirm_email?: string;
    confirm_password?: string;
}
