import {FC, useContext, useMemo} from "react";
import {List, Paper} from "@mui/material";
import {EntryCard} from "@/components/ui/EntryCard";
import {EntryStatus} from "@/interfaces";
import {EntriesContext} from "@/context/entries";
import {UiContext} from "@/context/ui";
import styles from '@/components/ui/EntryList.module.css'

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

    const {entries, updateEntry} = useContext(EntriesContext)
    const {isDragging, endDragging} = useContext(UiContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (event: DragEvent) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent) => {
        const id = event.dataTransfer.getData('text/plain');
        const entry = entries.find(e => e._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    }

    return (
        <>
            <div
                onDrop={onDropEntry}
                onDragOver={allowDrop}
                className={ isDragging ? styles.dragging : ''}
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
