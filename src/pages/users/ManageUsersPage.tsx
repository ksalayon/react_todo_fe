import React, {
    ComponentType,
    ReactElement,
    SyntheticEvent,
    useReducer,
} from "react";
import UsersTable from "../../features/users/components/UsersTable";
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
import AddUserForm from "../../features/users/components/AddUserForm";
import { ModalProjectedContentProps } from "../../types/interfaces/ModalProjectedContentProps";
import { useUsers } from "../../features/users/hooks/useUsers";
import { manageUserPageReducer, ManageUsersPageState } from "./reducer";

const ManageUsersPage: React.FC = () => {
    /**
     * Modal related states
     */
    const { users, loading, error } = useUsers();
    const initialState: ManageUsersPageState = {
        modalOpen: false,
        currentComponent: null,
        modalTitle: "",
        modalActions: undefined,
        snackBarOpen: false,
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(manageUserPageReducer, initialState);

    if (loading) return <p>Loading...</p>;
    if (error)
        return (
            <div>
                <p style={{ color: "red" }}>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    if (!loading && !users?.length) {
        return (
            <div>
                <p style={{ color: "red" }}>There are no users to display</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    const handleOpen = (
        Component: ComponentType<ModalProjectedContentProps>,
        title: string,
        actions: ReactElement,
    ) => {
        dispatch({ type: "SET_CURRENT_COMPONENT", payload: Component });
        dispatch({ type: "SET_MODAL_TITLE", payload: title });
        dispatch({ type: "TOGGLE_MODAL", payload: true });
    };

    const handleAddUserSuccess = () => {
        dispatch({ type: "TOGGLE_MODAL", payload: false });
        dispatch({ type: "TOGGLE_SNACKBAR", payload: true });
    };

    const handleSnackbarClose = (
        event: Event | SyntheticEvent<unknown, Event>,
        reason: string,
    ) => {
        // Optional: Ignore 'clickaway' dismissal if needed
        if (reason === "clickaway") {
            return;
        }
        dispatch({ type: "TOGGLE_SNACKBAR", payload: false });
    };
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
                                            onClick={() =>
                                                dispatch({
                                                    type: "TOGGLE_MODAL",
                                                    payload: true,
                                                })
                                            }
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
            {state.currentComponent && (
                <ModalWrapper
                    open={state.modalOpen}
                    actions={state.modalActions}
                    handleClose={() =>
                        dispatch({ type: "TOGGLE_MODAL", payload: false })
                    }
                    title={state.modalTitle}
                    ContentComponent={state.currentComponent}
                    handleSuccess={() => handleAddUserSuccess()}
                />
            )}
            {users && <UsersTable users={users} />}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={state.snackBarOpen}
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
