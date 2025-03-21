import { useEffect, useState } from "react";
import { fetchUsers } from "../../../services/userService";
import axios from "axios";
import { FetchUsersResponse } from "../../../types/interfaces/ApiResponse";

export const useUsers = () => {
    const [users, setUsers] = useState<FetchUsersResponse>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const controller = new AbortController();
        const fetchItems = async () => {
            try {
                const response = await fetchUsers(controller);
                setUsers(response);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError((err as Error).message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
        return () => controller.abort(); // Cleanup to prevent memory leaks
    }, []);
    return { users, loading, error };
};
