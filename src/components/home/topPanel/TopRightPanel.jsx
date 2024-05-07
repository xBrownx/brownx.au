import React from "react";
import styles from "./topPanel.module.css";
import {motion} from "framer-motion"

const TopRightPanel = () => {

    return (
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

            <div className={styles.content}>
                <h3>frontend</h3>
                <h3>backend</h3>
                <h3>data</h3>
                <h3>embedded</h3>
            </div>

        </motion.div>
    );
}

export default TopRightPanel;