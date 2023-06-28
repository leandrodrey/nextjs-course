import {FC, ReactNode} from "react";
import Navbar from "@/components/ui/Navbar";

interface Props {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}