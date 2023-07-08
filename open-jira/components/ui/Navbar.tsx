import {useContext} from "react";
import NextLink from 'next/link'
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {UiContext} from "@/context/ui";

export const Navbar = () => {

    const {openSideMenu} = useContext(UiContext);

    return (
        <AppBar>
            <Toolbar>
                <IconButton size='large' edge='start' onClick={openSideMenu}>
                    <MenuOutlinedIcon />
                </IconButton>
                <NextLink href="/" passHref>
                    <Typography variant='h6'>OpenJira</Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}
