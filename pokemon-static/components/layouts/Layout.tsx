import {FC, ReactNode} from "react";
import Navbar from "@/components/ui/Navbar";

interface Props {
    children: ReactNode
    title: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}