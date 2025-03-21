import { ComponentType, ReactElement } from "react";
import { ModalProjectedContentProps } from "../../types/interfaces/ModalProjectedContentProps";

export interface ManageUsersPageState {
    modalOpen: boolean;
    currentComponent: ComponentType<ModalProjectedContentProps> | null;
    modalTitle: string;
    modalActions: ReactElement | undefined;
    snackBarOpen: boolean;
    loading: boolean;
    error: string | null;
}

type Action =
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string | null }
    | { type: "TOGGLE_MODAL"; payload: boolean }
    | { type: "SET_MODAL_TITLE"; payload: string }
    | { type: "SET_MODAL_ACTIONS"; payload: ReactElement | undefined }
    | { type: "TOGGLE_SNACKBAR"; payload: boolean }
    | {
          type: "SET_CURRENT_COMPONENT";
          payload: ComponentType<ModalProjectedContentProps>;
      };

export const manageUserPageReducer = (
    state: ManageUsersPageState,
    action: Action,
): ManageUsersPageState => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "TOGGLE_MODAL":
            return { ...state, modalOpen: action.payload };
        case "SET_MODAL_TITLE":
            return { ...state, modalTitle: action.payload };
        case "SET_MODAL_ACTIONS":
            return { ...state, modalActions: action.payload };
        case "TOGGLE_SNACKBAR":
            return { ...state, snackBarOpen: action.payload };
        case "SET_CURRENT_COMPONENT":
            return { ...state, currentComponent: action.payload };
        default:
            throw new Error(
                `Unhandled action type: ${action && (action as Action).type}`,
            );
    }
};
