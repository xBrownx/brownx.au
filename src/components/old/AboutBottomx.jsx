import React from 'react';
import styles from '../../styles/about.module.css'
import {motion} from "framer-motion"
import {Link, useMatch, useResolvedPath} from "react-router-dom";

const AboutBottom = () => {
    return (
        <motion.div className={styles.bottomContainer}>
            <ul>
                <AboutBox
                    title={"i'm good at"}
                    content={
                        <>
                            <p>eating</p>
                            <p>drinking</p>
                            <p>complaining</p>
                        </>
                    }
                />
                <AboutBox
                    title={"i'm ok at"}
                    content={
                    <>
                            <p>money</p>
                            <p>data</p>
                            <p>complaining</p>
                        </>
                    }
                />
                <AboutBox
                    title={"i'm ok at"}
                    content={"design"}/>
                <AboutBox
                    title={"i'm ok at"}
                    content={"design"}/>
            </ul>
        </motion.div>
    );
};

function AboutBox({title, content, ...props}) {

    return (
        <li className={styles.aboutBox}>
            <h1>{title}</h1>
            {content}
        </li>
    )
}

export default AboutBottom;

