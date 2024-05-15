import {Link, useMatch, useResolvedPath} from "react-router-dom";
import styles from "../../styles/navbar.module.css";
import React from "react";

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? styles.active : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default CustomLink