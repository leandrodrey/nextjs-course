import type {AppContext, AppProps} from 'next/app'
import {ThemeProvider, CssBaseline, Theme} from "@mui/material";
import {customTheme, darkTheme, lightTheme} from "@/themes";

interface Props extends AppProps {
    theme: string
}

function App({Component, pageProps, theme}: Props) {

    const currentTheme = (): Theme => {
        if (theme === 'light') {
            return lightTheme;
        } else if (theme === 'dark') {
            return darkTheme;
        } else {
            return customTheme;
        }
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

App.getInitialProps = async ( appContext: AppContext) => {

    const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'};

    const validThemes = ['light', 'dark', 'custom'];

    return {
        theme: validThemes.includes(cookies.theme) ? cookies.theme : 'dark'
    }
}

export default App