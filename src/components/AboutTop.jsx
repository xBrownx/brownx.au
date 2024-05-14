import React from 'react';
import styles from '../styles/about.module.css'
import {motion} from "framer-motion"

import Circle1 from "./background/Circle-1";
import Wave2 from "./background/Wave-2";
import Blob1 from "./background/Blob-1";
import Wave1 from "./background/Wave-1";
import Wave3 from "./background/Wave-3";

const AboutTop = (props) => {
    return (
        <div className={styles.aboutTopWrapper}>
            <div className={styles.aboutTopContainer}>
                <motion.div
                    className={styles.topLeftContainer}
                    initial={{
                        transform: "translateX(-100%)"
                    }}
                    animate={{
                        transform: "translateX(0)",
                        transition: {duration: 0.5}
                    }}
                    exit={{
                        transform: "translateX(-100%)",
                        transition: {duration: 0.5}
                    }}>

                    <div className={styles.textContainer}>
                        {/*<h1>developer</h1>*/}
                        {/*<h4>Full-stack bilingual software developer specialising in web and cross-platform mobile*/}
                        {/*    applications.</h4>*/}
                    </div>
                    <motion.div
                        className={styles.backgroundContainer}
                        initial={{
                            transform: "translateX(100%)"
                        }}
                        animate={{
                            transform: "translateX(0)",
                            transition: {duration: 0.5}
                        }}
                        exit={{
                            transform: "translateX(100%)",
                            transition: {duration: 0.5}
                        }}>
                        <Circle1/>
                        <Wave2/>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className={styles.topRightContainer}
                initial={{
                    transform: "translateX(100%)"
                }}
                animate={{
                    transform: "translateX(0)",
                    transition: {duration: 0.5}
                }}
                exit={{
                    transform: "translateX(100%)",
                    transition: {duration: 0.5}
                }}>

                <div className={styles.textContainer}>
                    {/*<h1>analyst</h1>*/}
                    {/*<h4>Data Scientist with expertise in business analysis, data cleansing, dashboard design and*/}
                    {/*    development.</h4>*/}
                </div>

                <motion.div
                    className={styles.backgroundContainer}
                    initial={{
                        transform: "translateX(-100%)"
                    }}
                    animate={{
                        transform: "translateX(0)",
                        transition: {duration: 0.5}
                    }}
                    exit={{
                        transform: "translateX(-100%)",
                        transition: {duration: 0.5}
                    }}
                >
                    <Blob1/>
                    <Wave1/>
                    <Wave3/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutTop;