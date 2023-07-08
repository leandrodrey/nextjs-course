import React, {FC, useEffect, useReducer} from "react";

import {EntriesContext, entriesReducer} from "@/context/entries";
import {Entry} from "@/interfaces";
import {entriesApi} from "@/api";

export interface EntriesState {
    entries: Entry[];
}

interface ProviderProps {
    children: React.ReactNode
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const EntriesProvider: FC<ProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addEntry = async (description: string) => {
        const {data} = await entriesApi.post<Entry>('/entries', {description});
        dispatch({
            type: '[Entry] Add-Entry',
            payload: data
        })
    }

    const updateEntry = async ({_id, description, status}: Entry) => {
        try {
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`, {description, status});
            dispatch({
                type: '[Entry] Entry-Updated',
                payload: data
            })
        } catch (e) {
            console.log(e);
        }
    }

    const refreshEntries = async () => {
        const {data} = await entriesApi.get<Entry[]>('/entries');
        dispatch({
            type: '[Entry] Refresh-Data',
            payload: data
        });
    }

    useEffect(() => {
        refreshEntries();
    }, []);

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