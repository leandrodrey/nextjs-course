import {EntriesState} from "@/context/entries";

type EntriesActionType =
    | { type: '[Entries] - ActionName'; }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case '[Entries] - ActionName':
            return {
                ...state,
            }
        default:
            return state;
    }
}
