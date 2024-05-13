import React from 'react';
import styles from "../../styles/background.module.css";
import {motion} from "framer-motion";

const HalfCircle1 = (props) => {
    return (
        <motion.div className={styles.halfCircle1}
            initial={{
                opacity: 0,
                transform: "rotateZ(-180deg)",
                transformOrigin: "50% 100%",

            }}
            animate={{
                opacity: 1,
                transform: "rotateZ(0)",
                transition: {
                    duration: props.enterDuration,
                    delay: props.enterDelay + 0.4,
                },
                transformOrigin: "50% 100%",
            }}
            exit={{
                opacity: 0,
                transform: "rotateZ(180deg)",
                transition: {
                    duration: props.exitDuration,
                    delay: 0,
                },
                transformOrigin: "50% 100%",
                transitionEnd: {
                    display: "none",
                }
            }}
        />
    );
};

export default HalfCircle1;