import React, {FC} from "react";
import Navbar from "@/components/ui/Navbar";

interface Props {
    children: React.ReactNode
}

export const Layout: FC<Props> = ({children}) => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}