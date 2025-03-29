import { LoginRequest } from "../types/interfaces/ApiRequest";
import axios from "axios";
import { ApiUtil } from "../utils/api.util";
import { LoginResponse } from "../types/interfaces/ApiResponse";

export const authenticate = async (loginData: LoginRequest) => {
    const response = await axios.post(ApiUtil.envWrap("/login"), {
        ...loginData,
    });
    return response.data as LoginResponse;
};
