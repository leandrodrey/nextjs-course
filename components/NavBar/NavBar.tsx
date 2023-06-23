import React from 'react'
import styles from './NavBar.module.css';
import {ActiveLink} from "@/components/NavBar/ActiveLink";

const menuItems = [
    {href: '/', text: 'Home'},
    {href: '/about', text: 'About Us'},
    {href: '/contactus', text: 'Contact Us'},
    {href: '/pricing', text: 'Pricing'}
];

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            {menuItems.map((item, index) => (
                <ActiveLink key={item.href} href={item.href} text={item.text} />
            ))}
        </nav>
    );
}
export default NavBar
