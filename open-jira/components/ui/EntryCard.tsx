import {Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import {Entry} from "@/interfaces";
import {FC, useContext} from "react";
import {UiContext} from "@/context/ui";

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({entry}) => {

    const {startDragging, endDragging} = useContext(UiContext);

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text/plain', entry._id);
        startDragging();
    }

    const onDragEnd = (event: DragEvent) => {
        endDragging();
    }

    return (
        <>
            <Card
                sx={{marginBottom: 1}}
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
                <CardActionArea>
                    <CardContent>
                        <Typography sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                        <Typography variant="body2">hace 30 mintuos</Typography>
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    )
}
