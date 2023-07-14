import {createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

export const lightTheme = createTheme(
    {
        palette: {
            mode: 'light',
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                    position: 'sticky',
                },
                styleOverrides: {
                    root: {
                        background: '#4a148c',
                    }
                }
            }
        }
    }
);
