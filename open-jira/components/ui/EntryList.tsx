import {FC, useContext, useMemo} from "react";
import {List, Paper} from "@mui/material";
import {EntryCard} from "@/components/ui/EntryCard";
import {EntryStatus} from "@/interfaces";
import {EntriesContext} from "@/context/entries";
import {UiContext} from "@/context/ui";

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

    const {entries} = useContext(EntriesContext)
    const {isDragging} = useContext(UiContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text/plain');
        console.log('onDropEntry', id);
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div
                onDrop={onDropEntry}
                onDragOver={allowDrop}
            >
                <Paper sx={{height: 'calc(100vh - 250px)', padding: '3px 5px'}}>
                    <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}>
                        {
                            entriesByStatus.map(entry => (
                                <EntryCard key={entry._id} entry={entry}/>
                            ))
                        }
                    </ List>
                </Paper>
            </div>
        </>
    )
}
