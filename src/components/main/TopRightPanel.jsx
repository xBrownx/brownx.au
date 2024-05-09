import React from "react";
import styles from "../styles/main.module.css";
import {motion} from "framer-motion"
import Wave2 from "../background/Wave-2";
import Wave3 from "../background/Wave-3";
import Blob1 from "../background/Blob-1";

const TopRightPanel = ({ content, enterDuration, exitDuration, enterDelay, exitDelay }) => {

    return (
        <motion.div
            className={styles.topRightContainer}
            initial={{
                transform: "translateX(100%)"
            }}
            animate={{
                transform: "translateX(0)",
                transition: {
                    duration: enterDuration,
                    delay: enterDelay,
                }
            }}
            exit={{
                transform: "translateX(100%)",
                transition: {
                    duration: exitDuration,
                    delay: exitDelay,
                }
            }}>
            <Wave2 />
            <Wave3 />
            <Blob1 />
            {content}
        </motion.div>
    );
}

export default TopRightPanel;