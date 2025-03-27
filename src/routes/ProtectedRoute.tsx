// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { Role } from "../types/interfaces/User";

interface ProtectedRouteData {
    allowedRoles: Array<Role>;
    redirectTo?: string;
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteData> = ({
    allowedRoles = [],
    redirectTo = "/unauthorized",
    children,
}) => {
    const user = useAuth();

    if (!user?.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return <Navigate to={redirectTo} replace />;
    }

    return <>{children}</>;
};
