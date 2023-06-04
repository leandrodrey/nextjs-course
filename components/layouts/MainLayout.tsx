import React from 'react'
import NavBar from "@/components/NavBar/NavBar";

const MainLayout = ({children}) => {
    return (
        <>
            <NavBar/>
            <main>
                {children}
            </main>
        </>
    )
}
export default MainLayout;
