import axios from "axios";
import { ApiUtil } from "../utils/api.util";
import { AddUserRequest } from "../types/interfaces/ApiRequest";
import {
    AddUserResponse,
    FetchUsersResponse,
} from "../types/interfaces/ApiResponse";

export const addUser = async (userData: AddUserRequest) => {
    const response = await axios.post(ApiUtil.envWrap("/users"), userData);
    console.log("response", response);
    return response.data as AddUserResponse;
};

export const fetchUsers = async (controller: AbortController) => {
    const response = await axios.get(
        ApiUtil.envWrap("/users"),
        controller && { signal: controller.signal },
    );
    return response.data as FetchUsersResponse;
};
