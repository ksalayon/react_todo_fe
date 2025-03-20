export interface AddUserResponse {
    id: number;
    name: string;
    email: string;
}

export interface ApiErrorResponse {
    response?: { data?: { message?: string } };
}
