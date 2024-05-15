import React from 'react';
import styles from '../../styles/navbar.module.css'
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import CustomLink from "../ui/CustomLink";

function Navbar() {

    return (
            <nav className={styles.nav}>

                <Link to='/' className={styles.siteTitle}>
                    <Logo
                        className={styles.logo}
                        fill='var(--navbar-text-colour)'/>
                </Link>

                <ul>
                    <CustomLink to="/about">ABOUT</CustomLink>
                    <CustomLink to="/projects">PROJECTS</CustomLink>
                    {/*<CustomLink to="/blog">BLOG</CustomLink>*/}
                    <CustomLink to="/contact">CONTACT</CustomLink>
                </ul>
            </nav>
    );
}



export default Navbar;