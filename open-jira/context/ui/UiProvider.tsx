import React, {FC, useReducer} from "react";
import {UiContext, uiReducer} from "@/context/ui/";

interface ProviderProps {
    children: React.ReactNode
}

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

export const UiProvider: FC<ProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'});
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({
            type: 'UI - Set isAddingEntry',
            payload: isAdding
        });
    }

    const startDragging = () => {
        dispatch({type: 'UI - Start Dragging'});
    }

    const endDragging = () => {
        dispatch({type: 'UI - End Dragging'});
    }

    return (
        <UiContext.Provider
            value={{
                ...state,

                // Methods
                openSideMenu,
                closeSideMenu,

                setIsAddingEntry,

                startDragging,
                endDragging
            }}
        >
            {children}
        </UiContext.Provider>
    )
}