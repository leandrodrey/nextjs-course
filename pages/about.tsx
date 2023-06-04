import Head from 'next/head'
import {Inter} from 'next/font/google'
import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/layouts/MainLayout";

const inter = Inter({subsets: ['latin']})

export default function About() {
    return (
        <MainLayout>
            <h1>ABOUT US</h1>
        </MainLayout>
    )
}
