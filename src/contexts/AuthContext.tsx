// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { CurrentUser } from "../types/interfaces/User";
import { authenticate } from "../services/api/authService";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    currentUser: CurrentUser | null;
    login: (email: string, password: string) => Promise<void>;
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

    const login = async (email: string, password: string) => {
        const response = await authenticate({ email, password });

        setUser({
            ...response.user,
            stl: response.stl,
            isAuthenticated: !!response.stl,
        });
        localStorage.setItem("user", JSON.stringify(response.user));
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
