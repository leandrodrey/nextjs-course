import NextLink from 'next/link'
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {MenuOutlined} from '@mui/icons-material';

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky' elevation={0}>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <MenuOutlined/>
                    </IconButton>
                    <NextLink href="/" passHref>
                        <Typography sx={{color: 'white'}} variant='h6'>Cookie Master</Typography>
                    </NextLink>
                    <NextLink href="/theme-changer" passHref>
                        <Typography sx={{color: 'white'}} variant='h6'>Cambiar Tema</Typography>
                    </NextLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;