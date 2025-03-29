import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import ManageUsersPage from "./pages/users/ManageUsersPage";
import ManageTodosPage from "./pages/todos/ManageTodosPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Main MainLayout wrapping all routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />{" "}
                    {/* Renders at '/' */}
                    <Route
                        path="admin/users"
                        element={
                            <ProtectedRoute allowedRoles={["admin"]}>
                                <ManageUsersPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="admin/todos"
                        element={
                            <ProtectedRoute allowedRoles={["admin"]}>
                                <ManageTodosPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
