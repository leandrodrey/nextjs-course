import {Box, Button, TextField} from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry = () => {
    return (
        <Box sx={{ marginBottom:2, padding: 2}}>
            <Button
                startIcon={<AddIcon />}
            >
                Agregar Tarea
            </Button>

            <TextField
                fullWidth
                sx={{marginTop: 2, marginBottom: 1}}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva Entrada'
                helperText='Escribe una nueva entrada'
            >

            </TextField>

            <Box display='flex' justifyContent='space-between'>
                <Button variant="contained" color="secondary" endIcon={<SaveOutlinedIcon/>}>
                    Guardar
                </Button>
                <Button variant="contained" color="secondary" endIcon={<SaveOutlinedIcon/>}>
                    Cancelar
                </Button>
            </Box>
        </Box>
    )
}
