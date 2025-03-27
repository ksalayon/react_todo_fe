import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DropDownMenuItemProps {
    label: string;
    selectHandler: () => void;
}

interface DropDownMenuProps {
    anchor: DropDownMenuItemProps;
    menuItems: Array<DropDownMenuItemProps>;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuItems, anchor }) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget as Element);
    };

    const handleMenuClick = (item: DropDownMenuItemProps) => {
        item.selectHandler();
        setAnchorEl(null);
    };

    const handleMenuClose = (path: string | null) => {
        setAnchorEl(null);
        if (path) {
            navigate(path);
        }
    };

    return (
        <Container>
            <Box display="flex" alignItems="center">
                <Button onClick={() => handleMenuClick(anchor)}>
                    {anchor.label}
                </Button>
                <IconButton
                    size={"large"}
                    aria-label="delete"
                    color="primary"
                    onClick={(event) => handleMenuOpen(event)}
                >
                    <ArrowDropDownIcon fontSize={"inherit"} />
                </IconButton>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleMenuClose(null)}
            >
                {menuItems.map((item: DropDownMenuItemProps) => (
                    <MenuItem
                        key={item.label}
                        onClick={() => handleMenuClick(item)}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </Container>
    );
};

export default DropDownMenu;
