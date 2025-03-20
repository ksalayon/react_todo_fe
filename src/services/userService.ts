import axios from "axios";
import { ApiUtil } from "../utils/api.util";
import { AddUserRequest } from "../types/interfaces/ApiRequest";
import { AddUserResponse } from "../types/interfaces/ApiResponse";

export const addUser = async (userData: AddUserRequest) => {
    const response = await axios.post(ApiUtil.envWrap("/users"), userData);
    return response.data as AddUserResponse;
};
