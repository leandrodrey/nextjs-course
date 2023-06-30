import React, {FC, useReducer} from "react";
import {UiContext, uiReducer} from "@/context/ui/";

interface ProviderProps {
    children: React.ReactNode
}

export interface UiState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false
}

export const UiProvider: FC<ProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'});
    }

    return (
        <UiContext.Provider
            value={{
                ...state,
                openSideMenu,
                closeSideMenu
            }}
        >
            {children}
        </UiContext.Provider>
    )
}