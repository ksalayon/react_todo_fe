import React from "react";
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ModalWrapper({ open, handleClose, title, ContentComponent, handleSuccess, actions }) {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            {/* Title */}
            <DialogTitle>{title}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>

            {/* Dynamic Content */}
            <DialogContent>
                {ContentComponent && <ContentComponent successCallback={handleSuccess}/>}
            </DialogContent>

            {/* Dynamic Actions */}
            {/*<DialogActions>*/}
            {/*    {actions ? actions : <Button onClick={handleClose}>Close</Button>}*/}
            {/*</DialogActions>*/}
        </Dialog>
    );
}

export default ModalWrapper;
