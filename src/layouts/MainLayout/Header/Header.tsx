import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapper, NavItem, NavList } from "./style";
import DropDownMenu from "../../../components/DropDownMenu/DropDownMenu";
import { useAuth } from "../../../contexts/AuthContext";
// Styled Components

const Header: React.FC = () => {
    const navigate = useNavigate();
    const authContext = useAuth();
    const menuItems = [
        {
            label: "Login",
            selectHandler: () => {
                navigate("/login");
            },
        },
        {
            label: "Sign-Up",
            selectHandler: () => navigate("/signup"),
        },
    ];
    if (authContext?.currentUser?.slt) {
        menuItems.push({
            label: "Log out",
            selectHandler: () => {
                authContext?.logout();
                // navigate("/login");
            },
        });
    }
    return (
        <HeaderWrapper>
            <nav>
                <NavList>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/users">Users</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/todos">To-Do&apos;s</Link>
                    </NavItem>
                </NavList>
            </nav>
            <DropDownMenu
                anchor={{
                    label: "Home",
                    selectHandler: () => navigate("/"),
                }}
                menuItems={menuItems}
            ></DropDownMenu>
        </HeaderWrapper>
    );
};

export default Header;
