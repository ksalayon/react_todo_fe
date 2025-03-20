import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ManageUsersPage from "./pages/users/ManageUsersPage";
import ManageTodosPage from "./pages/todos/ManageTodosPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Main Layout wrapping all routes */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />{" "}
                    {/* Renders at '/' */}
                    <Route path="admin/users" element={<ManageUsersPage />} />
                    <Route path="admin/todos" element={<ManageTodosPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
