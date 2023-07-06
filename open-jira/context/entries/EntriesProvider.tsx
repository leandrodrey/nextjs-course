import React, {FC, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';

import {EntriesContext, entriesReducer} from "@/context/entries";
import {Entry} from "@/interfaces";

export interface EntriesState {
    entries: Entry[];
}

interface ProviderProps {
    children: React.ReactNode
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Crear el proyecto',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Proyecto en progreso',
            status: 'in-progress',
            createdAt: Date.now() - 100000
        },
        {
            _id: uuidv4(),
            description: 'Proyecto terminado',
            status: 'finished',
            createdAt: Date.now() - 10000
        },
    ]
}

export const EntriesProvider: FC<ProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            status: 'pending',
            createdAt: Date.now()
        }

        dispatch({
            type: '[Entry] Add-Entry',
            payload: newEntry
        })
    }

    const updateEntry = (entry: Entry) => {
        dispatch({
            type: '[Entry] Entry-Updated',
            payload: entry
        })
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,

                // Methods
                addEntry,
                updateEntry
            }}
        >
            {children}
        </EntriesContext.Provider>
    )
}