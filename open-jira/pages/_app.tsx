import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ThemeProvider, createTheme} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const basicTheme = createTheme(
    {
        palette: {
            mode: 'dark',
        }
    }
);

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={basicTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
