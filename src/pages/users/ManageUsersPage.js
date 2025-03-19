import React, {useState} from 'react';
import UsersTable from "../../components/Users/UsersTable";
import {Box, AppBar, Toolbar, Typography, Button, Snackbar, Alert} from "@mui/material";
import AddUserForm from "../../components/Users/AddUserForm";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";

const ManageUsersPage = () => {
    /**
     * Modal related states
     */
    const [modalOpen, setModalOpen] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(null);
    const [modalTitle, setModalTitle] = useState("");
    const [modalActions, setModalActions] = useState(null);
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const handleOpen = (Component, title, actions) => {
        setCurrentComponent(() => Component);
        setModalTitle(title);
        setModalActions(actions);
        setModalOpen(true);
    };

    const handleAddUserSuccess = () => {
        setModalOpen(false);
        setSnackBarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        // Optional: Ignore 'clickaway' dismissal if needed
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarOpen(false); // Close the Snackbar
    };


    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Manage Users
                        </Typography>
                        <Button color="inherit" onClick={() => handleOpen(AddUserForm, 'Create New User',
                            <>
                                <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                                <Button onClick={() => alert("Created!")}>Create</Button>
                            </>
                        )}>Create New User</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <ModalWrapper
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                title={modalTitle}
                ContentComponent={currentComponent}
                actions={modalActions}
                handleSuccess={() => handleAddUserSuccess()}
            />
            <UsersTable/>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                open={snackBarOpen}
                onClose={handleSnackbarClose}
                autoHideDuration={5000}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    User successfully created
                </Alert>
            </Snackbar>
        </>
    );
};

export default ManageUsersPage;