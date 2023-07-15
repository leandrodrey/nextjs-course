import type {AppContext, AppProps} from 'next/app'
import {ThemeProvider, CssBaseline, Theme} from "@mui/material";
import {customTheme, darkTheme, lightTheme} from "@/themes";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

interface Props extends AppProps {
    theme: string
}

function App({Component, pageProps, theme = 'dark'}: Props) {

    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        const cookieTheme = Cookies.get('theme') || 'light';
        const selectedTheme = (): Theme => {
            if (cookieTheme === 'light') {
                return lightTheme;
            } else if (cookieTheme === 'dark') {
                return darkTheme;
            } else {
                return customTheme;
            }
        }
        setCurrentTheme(selectedTheme);
    }, []);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

/*App.getInitialProps = async ( appContext: AppContext) => {

    const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'};

    const validThemes = ['light', 'dark', 'custom'];

    return {
        theme: validThemes.includes(cookies.theme) ? cookies.theme : 'dark'
    }
}*/

export default App