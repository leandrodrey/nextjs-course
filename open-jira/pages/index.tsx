import {Typography} from "@mui/material";
import {Layout} from "@/components/layouts";
import {useContext} from "react";
import {UiContext} from "@/context/ui";

export default function Home() {

    const {closeSideMenu} = useContext(UiContext);

    return (
        <>
            <Layout onClick={closeSideMenu}>
                <Typography variant='h1' color='primary'> HOLA </Typography>
            </Layout>
        </>
    )
}
