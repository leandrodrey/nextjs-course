import {FC, ReactNode} from 'react';
import Head from 'next/head';
import {Navbar} from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Home - Leandro Rey</title>
                <meta name="description" content="Home Page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
};
