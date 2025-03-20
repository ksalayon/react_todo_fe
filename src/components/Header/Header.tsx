import { Link } from "react-router-dom";
import { HeaderWrapper, NavItem, NavList } from "./style";
// Styled Components

const Header: React.FC = () => {
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
        </HeaderWrapper>
    );
};

export default Header;
