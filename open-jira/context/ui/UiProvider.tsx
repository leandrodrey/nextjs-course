import React, {FC, useReducer} from "react";
import {uiReducer} from "@/context/ui/uiReducer";

export interface UiState {
    sideMenuOpen: boolean;
}

interface ProviderProps {
    children: React.ReactNode
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false
}

export const UiProvider: FC<ProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    return (
        <UiContext.Provider
            value={{
                sideMenuOpen: false
            }}
        >
            {children}
        </UiContext.Provider>
    )
}