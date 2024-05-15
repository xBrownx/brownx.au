import React from 'react';
import styles from '../../styles/about.module.css'
import {motion} from "framer-motion"

import Circle1 from "../background/Circle-1";
import Wave2 from "../background/Wave-2";
import Blob1 from "../background/Blob-1";
import Wave1 from "../background/Wave-1";
import Wave3 from "../background/Wave-3";
import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";

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
                        <Circle1/>
                        <Wave2/>
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
                    <Blob1/>
                    <Wave1/>
                    <Wave3/>
                </TransformDiv>
            </TransformDiv>
        </div>
    );
};

export default AboutTop;