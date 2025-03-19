import axios from "axios";
import {ApiUtil} from "../utils/api.util";

export const addUser = async (userData) => {
    const response = await axios.post(ApiUtil.envWrap("/users"), userData);
    return response.data;
};