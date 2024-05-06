import React, {useEffect, useImperativeHandle, useState} from 'react';
import '../App.css'
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {ReactComponent as Icon} from '../assets/img/iconsvg.svg';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='site-title'>
                    <Logo className='logo'/>
                    {/*<Icon className='icon'/>*/}
                </Link>

                <ul>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/resume">Resume</CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </nav>
        </>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;