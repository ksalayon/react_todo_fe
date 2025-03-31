// ProtectedRoute.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Role } from "../types/interfaces/Role";

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
    const authContext = useAuth();
    const location = useLocation();

    if (!authContext?.currentUser?.slt) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(authContext.currentUser.role)
    ) {
        return <Navigate to={redirectTo} replace />;
    }

    return <>{children}</>;
};
