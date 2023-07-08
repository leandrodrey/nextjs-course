import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "@/themes";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
