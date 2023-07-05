import type {AppProps} from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme} from "@/themes";
import {UiProvider} from "@/context/ui";
import {EntriesProvider} from "@/context/entries";

export default function App({Component, pageProps}: AppProps) {
    return (
        <EntriesProvider>
            <UiProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UiProvider>
        </EntriesProvider>
    )
}
