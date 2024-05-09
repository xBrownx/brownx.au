import React from "react";
import {motion} from "framer-motion"
import styles from "../styles/main.module.css";
import Circle1 from "../background/Circle-1";
import Wave1 from "../background/Wave-1";

const TopLeftPanel = ({ content, enterDuration, exitDuration, enterDelay, exitDelay }) => {
    return (
        <motion.div
            className={styles.topLeftContainer}
            initial={{
                transform: "translateX(-100%)"
            }}
            animate={{
                transform: "translateX(0)",
                transition: {
                    duration: enterDuration,
                    delay: enterDelay,
                }
            }}
            exit={{
                transform: "translateX(-100%)",
                transition: {
                    duration: exitDuration,
                    delay: exitDelay,
                }
            }}>
            <Circle1 />
            <Wave1 />
            {content}
        </motion.div>
    );
}

export default TopLeftPanel;