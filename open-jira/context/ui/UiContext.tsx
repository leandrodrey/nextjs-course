import {createContext} from "react";

interface ContextProps {
    prop1: boolean;
}

export const UiContext = createContext({} as ContextProps);
