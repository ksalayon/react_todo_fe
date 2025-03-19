import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HeaderWrapper, NavList, NavItem} from "./style";
// Styled Components

// React Component
const Header = () => {
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
                        <Link to="/admin/todos">To-Do's</Link>
                    </NavItem>
                </NavList>
            </nav>
        </HeaderWrapper>
    );
};

export default Header;