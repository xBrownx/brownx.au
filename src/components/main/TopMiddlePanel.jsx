import styles from "../styles/main.module.css";
import {motion} from "framer-motion"
import React from "react";

const TopMiddlePanel = ({heading, content, enterDuration, exitDuration, enterDelay, exitDelay}) => {

    return (
        <motion.div className={styles.topMiddleContainer}>
            <motion.h1
                className={styles.h1}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.4,
                        delay: 0.8,
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.2,
                        delay: 0,
                    }
                }}>
                {heading}
            </motion.h1>
            {content}
            <motion.div
                className={styles.halfCircle}
                initial={{
                    opacity: 0,
                    transform: "rotateZ(-180deg)",
                    transformOrigin: "50% 100%",

                }}
                animate={{
                    opacity: 1,
                    transform: "rotateZ(0)",
                    transition: {
                        duration: enterDuration,
                        delay: enterDelay + 0.4,
                    },
                    transformOrigin: "50% 100%",
                }}
                exit={{
                    opacity: 0,
                    transform: "rotateZ(180deg)",
                    transition: {
                        duration: exitDuration,
                        delay: 0,
                    },
                    transformOrigin: "50% 100%",
                    transitionEnd: {
                        display: "none",
                    }
                }}
            />
        </motion.div>
    )
}

export default TopMiddlePanel;