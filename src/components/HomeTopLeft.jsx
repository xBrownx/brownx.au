import React from "react";
import {motion} from "framer-motion"
import styles from "../styles/home.module.css";
import '../App.css'


const HomeTopLeft = (props) => {
    return (
        <motion.div
            className={styles.homeTopContainer}
            // initial={{
            //     transform: "translateX(-100%)"
            // }}
            // animate={{
            //     transform: "translateX(0)",
            //     transition: {duration: 0.5}
            // }}
            // exit={{
            //     transform: "translateX(-100%)",
            //     transition: {duration: 0.5}
            // }}
        >
            <div className={styles.textContainer}>
                <h1>developer</h1>
                <h4>Full-stack bilingual software developer specialising in web and cross-platform mobile applications.</h4>
            </div>
            {/*<div className={styles.leftContentWrapper}>*/}
            {/*    <h2>SOFTWARE</h2>*/}
            {/*    <h2>DEVELOPER</h2>*/}
            {/*    <h2>SOLUTION</h2>*/}
            {/*    <h2>ARCHITECT</h2>*/}
            {/*</div>*/}

        </motion.div>
    );
}

export default HomeTopLeft;