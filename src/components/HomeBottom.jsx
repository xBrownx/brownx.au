import React from 'react';
import styles from "../styles/home.module.css";
import {motion} from "framer-motion";

const HomeBottom = () => {
    return (
        <motion.div className={styles.bottomContainer}>
            <ul>
                <AboutBox
                    title={
                    <>
                        <h2>SOFTWARE</h2>
                        <h2>DEVELOPER</h2>
                    </>
                    }
                />
                <AboutBox title={
                    <>
                        <h2>SOLUTION</h2>
                        <h2>ARCHITECT</h2>
                    </>
                }/>
                <AboutBox title={
                    <>
                        <h2>DATA</h2>
                        <h2>SCIENTIST</h2>
                    </>
                }/>

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

export default HomeBottom;