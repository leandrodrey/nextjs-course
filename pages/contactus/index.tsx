import Head from 'next/head'
import {Inter} from 'next/font/google'
import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/layouts/MainLayout";

const inter = Inter({subsets: ['latin']})

export default function Index() {
    return (
        <MainLayout>
            <h1>CONTACT US</h1>
        </MainLayout>
    )
}
