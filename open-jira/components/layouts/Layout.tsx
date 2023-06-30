import React, {FC, useContext} from 'react'
import {Box} from "@mui/material";
import {Navbar, Sidebar} from "@/components/ui";
import {UiContext} from "@/context/ui";

interface Props {
    children: React.ReactNode
}

export const Layout:FC<Props> = ({children}) => {

    return (
        <Box sx={{ flexFlow:1 }}>

            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
