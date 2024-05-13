import React from "react";
import styles from "../../styles/main.module.css";
import {motion} from "framer-motion"
import Wave2 from "../background/Wave-2";
import Wave3 from "../background/Wave-3";
import Blob1 from "../background/Blob-1";

const TopRightPanel = (props) => {

    return (
        <motion.div
            className={styles.topRightContainer}
            initial={{
                transform: "translateX(100%)"
            }}
            animate={{
                transform: "translateX(0)",
                transition: {
                    duration: props.enterDuration,
                    delay: props.enterDelay,
                }
            }}
            exit={{
                transform: "translateX(100%)",
                transition: {
                    duration: props.exitDuration,
                    delay: props.exitDelay,
                }
            }}>
            {/*<Wave2 />*/}
            {/*<Wave3 />*/}
            {/*<Blob1 />*/}
            {/*{props.content}*/}
        </motion.div>
    );
}

export default TopRightPanel;