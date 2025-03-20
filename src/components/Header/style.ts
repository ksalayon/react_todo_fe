import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background: #333;
    padding: 1rem;
    color: #fff;
    text-align: center;
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
`;

export const NavItem = styled.li`
    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            text-decoration: underline;
        }
    }
`;
