import React, {FC, useReducer} from "react";
import {UiContext, uiReducer} from "@/context/ui/";

interface ProviderProps {
    children: React.ReactNode
}

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false
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

    return (
        <UiContext.Provider
            value={{
                ...state,

                // Methods
                openSideMenu,
                closeSideMenu,
                setIsAddingEntry
            }}
        >
            {children}
        </UiContext.Provider>
    )
}