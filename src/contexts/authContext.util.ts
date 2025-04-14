import { LoginResponse } from "../types/interfaces/ApiResponse";
import { CurrentUser } from "../types/interfaces/User";

export function loginDataToCurrentUser(data: LoginResponse): CurrentUser {
    return { ...data, slt: data.slt, isAuthenticated: !!data.slt };
}
