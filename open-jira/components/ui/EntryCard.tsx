import {Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import {Entry} from "@/interfaces";
import {FC} from "react";

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({entry}) => {

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text/plain', entry._id);
    }

    const onDragEnd = (event: DragEvent) => {

    }

    return (
        <>
            <Card
                sx={{marginBottom: 1}}
                draggable
                onDragStart={onDragStart}
                onDragEnd={() => console.log('onDragEnd')}
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
