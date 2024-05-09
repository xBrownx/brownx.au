import React from "react";
import styles from "./styles/home.module.css";
import {motion} from "framer-motion"

const HomeTopRight = () => {

    return (
        <motion.div
            className={styles.topContainer}
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

            {/*<div className={styles.topRightOuterCircle}>*/}

            {/*</div>*/}
            <div className={styles.content}>
                <h3>frontend</h3>
                <h3>backend</h3>
                <h3>assend</h3>
                <h3>bellend</h3>
            </div>

        </motion.div>
    );
}

export default HomeTopRight;