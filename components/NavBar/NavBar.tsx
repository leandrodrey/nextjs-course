import React from 'react'
import styles from './NavBar.module.css';
import {ActiveLink} from "@/components/NavBar/ActiveLink";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ActiveLink href="/" text="Home" />
            <ActiveLink href="/about" text="About Us" />
            <ActiveLink href="/contactus" text="Contact Us" />
        </nav>
    );
}
export default NavBar
