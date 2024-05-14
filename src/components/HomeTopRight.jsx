import React from "react";
import styles from "../styles/home.module.css";
import {motion} from "framer-motion"

const HomeTopRight = () => {

    return (
        <motion.div
            className={styles.homeTopContainer}
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
                <h1>analyst</h1>
                <h4>Data Scientist with expertise in business analysis, data cleansing, dashboard design and development.</h4>
            </div>

            {/*<div className={styles.leftContentWrapper}>*/}
            {/*    <h2>APPS & WEBSITES</h2>*/}
            {/*    <h2>CROSS-PLATFORM</h2>*/}
            {/*    <h2>FRONT-END</h2>*/}
            {/*    <h2>BACK-END</h2>*/}
            {/*</div>*/}

        </motion.div>
    );
}

export default HomeTopRight;