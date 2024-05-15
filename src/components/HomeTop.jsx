import React from "react";
import styles from "../styles/home.module.css";
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../assets/icons/github.svg';
import {ReactComponent as Email} from '../assets/icons/email.svg';
import Wave2 from "./background/Wave-2";
import Wave1 from "./background/Wave-1";
import Blob1 from "./background/Blob-1";
import Wave3 from "./background/Wave-3";
import TransformDiv from "./ui/TransformDiv";
import FadeDiv from "./ui/FadeDiv";

const HomeTop = (props) => {
    return (
        <div className={styles.homeTopWrapper}>
            <div className={styles.homeTopContainer}>
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
                        <h3>&lt;/&gt; front-end </h3>
                        <h3>&lt;/&gt; back-end </h3>
                        <h3>&lt;/&gt; mobile </h3>
                        <h3>&lt;/&gt; web </h3>
                        <h3>&lt;/&gt; front-end </h3>
                        {/*<h3>&lt;/&gt; developer </h3>*/}
                        {/*<h4>Full-stack bilingual software developer specialising in web and cross-platform mobile*/}
                        {/*    applications.</h4>*/}
                        {/*<h3>&lt;/&gt; analyst </h3>*/}
                        {/*<h4>Data Scientist with expertise in business analysis, data cleansing, dashboard design and*/}
                        {/*    development.</h4>*/}
                        {/*<h3>&lt;/&gt; amateur designer </h3>*/}
                        {/*<h4>Data Scientist with expertise in business analysis, data cleansing, dashboard design and*/}
                        {/*    development.</h4>*/}

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
                        {/*<Circle1/>*/}
                        <Wave2/>
                    </TransformDiv>
                </TransformDiv>

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
                        <h2>Hey! I'm</h2>
                        <h1>Andrew Brown</h1>
                        <p>Full-Stack Software Developer</p>
                        <div className={styles.btnContainer}>
                            <button className={[styles.btn, styles.btn1].join(' ')}>
                                about
                            </button>
                            <button className={[styles.btn, styles.btn2].join(' ')}>
                                projects
                            </button>
                        </div>
                        <div className={styles.socialsContainer}>
                            <LinkedIn className={styles.icon}/>
                            <Github className={styles.icon}/>
                            <Email className={styles.icon}/>
                        </div>
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
                        {/*<Blob1/>*/}
                        {/*<Wave1/>*/}
                        <Wave3/>
                    </TransformDiv>
                </TransformDiv>
            </div>
        </div>
    );
}

export default HomeTop;