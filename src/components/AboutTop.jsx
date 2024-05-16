import React from 'react';
import styles from './about/About.module.css'
import {motion} from "framer-motion"


import TransformDiv from "./ui/TransformDiv";
import FadeDiv from "./ui/FadeDiv";

const AboutTop = (props) => {
    return (
        <div className={styles.aboutTopWrapper}>
            <div className={styles.aboutTopContainer}>
                <TransformDiv
                    className={styles.topLeftContainer}
                    initPosition={"translateX(-100%)"}
                    animPosition={"translateX(0)"}
                    exitPosition={"translateX(-100%)"}
                    animDuration={0.5}
                    exitDuration={0.5}
                    animDelay={0}
                    exitDelay={0.5}
                >

                    <FadeDiv
                        className={styles.textContainer}
                        animDuration={0.5}
                        exitDuration={0.5}
                        animDelay={0.5}
                        exitDelay={0}
                    >
                        <h1>andrew brown</h1>
                        <h4>&lt;/&gt; BSc Computer Science - University of New England</h4>
                        <h4>&lt;/&gt; Business Lead SME - Transport for NSW</h4>
                    </FadeDiv>
                    <TransformDiv
                        className={styles.backgroundContainer}
                        initPosition={"translateX(100%)"}
                        animPosition={"translateX(0)"}
                        exitPosition={"translateX(100%)"}
                        animDuration={0.5}
                        exitDuration={0.5}
                        animDelay={0}
                        exitDelay={0.5}
                    >

                    </TransformDiv>
                </TransformDiv>
            </div>
            <TransformDiv
                className={styles.topRightContainer}
                initPosition={"translateX(100%)"}
                animPosition={"translateX(0)"}
                exitPosition={"translateX(100%)"}
                animDuration={0.5}
                exitDuration={0.5}
                animDelay={0}
                exitDelay={0.5}
            >

                <FadeDiv
                    className={styles.textContainer}
                    animDuration={0.5}
                    exitDuration={0.5}
                    animDelay={0.5}
                    exitDelay={0}
                >

                </FadeDiv>

                <TransformDiv
                    className={styles.backgroundContainer}
                    initPosition={"translateX(-100%)"}
                    animPosition={"translateX(0)"}
                    exitPosition={"translateX(-100%)"}
                    animDuration={0.5}
                    exitDuration={0.5}
                    animDelay={0}
                    exitDelay={0.5}
                >

                </TransformDiv>
            </TransformDiv>
        </div>
    );
};

export default AboutTop;