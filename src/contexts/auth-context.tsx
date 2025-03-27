// auth-context.tsx
import { createContext, useContext } from "react";
import { CurrentUser } from "../types/interfaces/User";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<CurrentUser | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    // Example user object from auth provider or backend
    const user: CurrentUser = {
        id: 1,
        name: "Kin",
        email: "asdf@asdf.com",
        isAuthenticated: true,
        role: "admin",
    };

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
