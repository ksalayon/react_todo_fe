// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { CurrentUser } from "../types/interfaces/User";
import { authenticate } from "../services/api/authService";
import { LoginRequest } from "../types/interfaces/ApiRequest";
import { LoginResponse } from "../types/interfaces/ApiResponse";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    currentUser: CurrentUser | null;
    login: (
        loginCredentials: LoginRequest,
    ) => Promise<LoginResponse | undefined>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<CurrentUser | null>(null);

    // Optional: Persist auth from localStorage/sessionStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (loginCredentials: LoginRequest) => {
        try {
            const response = await authenticate(loginCredentials);
            setUser({
                ...response.user,
                slt: response.slt,
                isAuthenticated: !!response.slt,
            });
            localStorage.setItem("user", JSON.stringify(response.user));
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
        <AuthContext.Provider value={{ currentUser: user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
