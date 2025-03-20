import React, {
    ComponentType,
    ReactElement,
    SyntheticEvent,
    useState,
} from "react";
import UsersTable from "../../components/Users/UsersTable";
import {
    Alert,
    AppBar,
    Box,
    Button,
    Snackbar,
    Toolbar,
    Typography,
} from "@mui/material";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import AddUserForm from "../../components/Users/AddUserForm";
import { ModalProjectedContentProps } from "../../types/interfaces/ModalProjectedContentProps";

const ManageUsersPage: React.FC = () => {
    /**
     * Modal related states
     */
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [currentComponent, setCurrentComponent] =
        useState<ComponentType<ModalProjectedContentProps>>();
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalActions, setModalActions] = useState<ReactElement | undefined>(
        undefined,
    );
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

    const handleOpen = (
        Component: ComponentType<ModalProjectedContentProps>,
        title: string,
        actions: ReactElement,
    ) => {
        setCurrentComponent(() => Component);
        setModalTitle(title);
        setModalActions(actions);
        setModalOpen(true);
    };

    const handleAddUserSuccess = () => {
        setModalOpen(false);
        setSnackBarOpen(true);
    };

    const handleSnackbarClose = (
        event: Event | SyntheticEvent<unknown, Event>,
        reason: string,
    ) => {
        // Optional: Ignore 'clickaway' dismissal if needed
        if (reason === "clickaway") {
            return;
        }

        setSnackBarOpen(false); // Close the Snackbar
    };
    console.log("manage user currentComponent", currentComponent);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Manage Users
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() =>
                                handleOpen(
                                    AddUserForm,
                                    "Create New User",
                                    <>
                                        <Button
                                            onClick={() => setModalOpen(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => alert("Created!")}
                                        >
                                            Create
                                        </Button>
                                    </>,
                                )
                            }
                        >
                            Create New User
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {currentComponent ? (
                <ModalWrapper
                    open={modalOpen}
                    handleClose={() => setModalOpen(false)}
                    title={modalTitle}
                    ContentComponent={currentComponent}
                    handleSuccess={() => handleAddUserSuccess()}
                />
            ) : null}
            <UsersTable />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackBarOpen}
                onClose={handleSnackbarClose}
                autoHideDuration={5000}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    User successfully created
                </Alert>
            </Snackbar>
        </>
    );
};

export default ManageUsersPage;
