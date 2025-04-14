// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { CurrentUser } from "../types/interfaces/User";
import { authenticate } from "../services/api/authService";
import { LoginRequest } from "../types/interfaces/ApiRequest";
import { LoginResponse } from "../types/interfaces/ApiResponse";
import { loginDataToCurrentUser } from "./authContext.util";

interface AuthProviderProps {
    children: React.ReactNode;
}

export interface AuthContextProps {
    currentUser: CurrentUser | null;
    isLoading: boolean;
    login: (
        loginCredentials: LoginRequest,
    ) => Promise<LoginResponse | undefined>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(true); // <-- loading state

    // Persist auth from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(loginDataToCurrentUser(JSON.parse(storedUser)));
        }
        setIsLoading(false);
    }, []);

    const login = async (loginCredentials: LoginRequest) => {
        try {
            const response = await authenticate(loginCredentials);
            setUser(loginDataToCurrentUser(response));
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        } catch (e) {
            throw new Error("Unable to authenticate user");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
            value={{ currentUser: user, login, logout, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
