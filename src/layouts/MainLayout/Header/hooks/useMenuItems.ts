import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProps } from "../../../../contexts/AuthContext";
import { DropDownMenuItemProps } from "../../../../components/DropDownMenu/DropDownMenu";

export const useMenuItems = (authContextProps: AuthContextProps | null) => {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState<DropDownMenuItemProps[]>([]);
    useEffect(() => {
        const menuItems = [];
        if (authContextProps?.currentUser?.isAuthenticated) {
            menuItems.push({
                label: "Log out",
                selectHandler: () => {
                    authContextProps?.logout();
                },
            });
        } else {
            menuItems.push(
                ...[
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
                ],
            );
        }
        setMenuItems(menuItems);
    }, [authContextProps]);
    return { menuItems };
};
