import React from "react";
import {motion} from "framer-motion"
import styles from "./topPanel.module.css";

const TopLeftPanel = () => {
    return (
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
            <div className={styles.content}>
                <h2>developer</h2>
                <h2>scientist</h2>
                <h2>engineer</h2>
            </div>
        </motion.div>
    );
}

export default TopLeftPanel;