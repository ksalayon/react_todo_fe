import React, { ComponentType, ReactElement } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalProjectedContentProps } from "../../types/interfaces/ModalProjectedContentProps";

interface ModalWrapperProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    ContentComponent?: ComponentType<ModalProjectedContentProps>;
    handleSuccess: () => void;
    actions?: ReactElement;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
    open,
    handleClose,
    title,
    ContentComponent,
    handleSuccess,
    actions,
}) => {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            {/* Title */}
            <DialogTitle>{title}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            {/* Dynamic Content */}

            {ContentComponent ? (
                <DialogContent>
                    <ContentComponent successCallback={handleSuccess} />
                </DialogContent>
            ) : null}

            <DialogActions>{actions ? actions : null}</DialogActions>
        </Dialog>
    );
};

export default ModalWrapper;
