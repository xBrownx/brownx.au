import React from "react";
import {motion} from "framer-motion"
import styles from "./styles/home.module.css";
import '../App.css'


const HomeTopLeft = () => {
    return (
        <motion.div
            className={styles.topContainer}
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

            <div className={styles.leftContentWrapper}>
                <h2>developer</h2>
            </div>

        </motion.div>
    );
}

export default HomeTopLeft;