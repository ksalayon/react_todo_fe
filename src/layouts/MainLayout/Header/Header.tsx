import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapper, NavItem, NavList } from "./style";
import DropDownMenu from "../../../components/DropDownMenu/DropDownMenu";
import { useAuth } from "../../../contexts/AuthContext";
import { useMenuItems } from "./hooks/useMenuItems";
// Styled Components

const Header: React.FC = () => {
    const navigate = useNavigate();
    const authContext = useAuth();
    const { menuItems } = useMenuItems(authContext);

    if (!authContext || authContext?.isLoading) {
        return <HeaderWrapper>{"..Loading"}</HeaderWrapper>;
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
