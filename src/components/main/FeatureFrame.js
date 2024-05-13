import styles from "../../styles/featureFrame.module.css";
import {motion} from "framer-motion"
import React from "react";
import Egg1 from "../background/Egg-1";
import Swirl1 from "../background/Swirl-1";
import HalfCircle1 from "../background/HalfCircle-1";

const FeatureFrame = (props) => {

    return (
        <motion.div className={styles.featureFrameContainer}>

            {/*<Egg1 />*/}
            {/*<Swirl1 />*/}

            <HalfCircle1
                enterDuration={props.enterDuration}
                exitDuration={props.exitDuration}
                enterDelay={props.enterDelay}
                exitDelay={props.exitDelay}
            />
            {/*<motion.h1*/}
            {/*    className={styles.h1}*/}
            {/*    initial={{*/}
            {/*        opacity: 0*/}
            {/*    }}*/}
            {/*    animate={{*/}
            {/*        opacity: 1,*/}
            {/*        transition: {*/}
            {/*            duration: 0.4,*/}
            {/*            delay: 0.8,*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    exit={{*/}
            {/*        opacity: 0,*/}
            {/*        transition: {*/}
            {/*            duration: 0.2,*/}
            {/*            delay: 0,*/}
            {/*        }*/}
            {/*    }}>*/}
            {/*    {props.heading}*/}
            {/*</motion.h1>*/}
            {/*{props.content}*/}

        </motion.div>
    )
}

export default FeatureFrame;