import {FC, useContext, useMemo} from "react";
import {List, Paper} from "@mui/material";
import {EntryCard} from "@/components/ui/EntryCard";
import {EntryStatus} from "@/interfaces";
import {EntriesContext} from "@/context/entries";

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

    const {entries} = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    return (
        <>
            <div>
                <Paper sx={{height: 'calc(100vh - 250px)', padding: '3px 5px'}}>
                    <List sx={{opacity: 1}}>
                        {
                            entriesByStatus.map(entry => (
                                <EntryCard key={entry.id} entry={entry}/>
                            ))
                        }
                    </ List>
                </Paper>
            </div>
        </>
    )
}