import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapper, NavItem, NavList } from "./style";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
// Styled Components

const Header: React.FC = () => {
    const navigate = useNavigate();

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
                menuItems={[
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
                ]}
            ></DropDownMenu>
        </HeaderWrapper>
    );
};

export default Header;
