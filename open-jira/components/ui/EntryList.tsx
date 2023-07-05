import {List, Paper} from "@mui/material";
import {EntryCard} from "@/components/ui/EntryCard";

export const EntryList = () => {
    return (
        <>
            <div>
                <Paper sx={{height: 'calc(100vh - 250px)', overflow: 'scroll', padding:'3px 5px' }}>
                    <List sx={{opacity: 1}}>
                        <EntryCard/>
                    </ List>
                </Paper>
            </div>
        </>
    )
}
