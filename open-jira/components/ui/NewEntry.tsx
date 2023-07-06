import {ChangeEvent, useContext, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {EntriesContext} from "@/context/entries";
import {UiContext} from "@/context/ui";

export const NewEntry = () => {

    const {addEntry} = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UiContext);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        addEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{marginBottom: 2, paddingX: 2}}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{marginTop: 2, marginBottom: 1}}
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label='Nueva Entrada'
                            helperText={ inputValue.length <=0 && touched && 'Escribe una nueva entrada'}
                            error={inputValue.length <=0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanges}
                            onBlur={() => setTouched(true)}
                        >
                        </TextField>

                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<SaveOutlinedIcon/>}
                                onClick={onSave}>
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<CancelOutlinedIcon/>}
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddIcon/>}
                        fullWidth
                        variant="outlined"
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>
                )
            }
        </Box>
    )
}
