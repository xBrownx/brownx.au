import React from "react";
import styles from "../home/Home.module.css";
import HomeTopMiddle from "../ui/HomeTopMiddle";
import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";

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
                        <h1>developer</h1>
                        <h4>Full-stack bilingual software developer specialising in web and cross-platform mobile
                            applications.</h4>
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
                <HomeTopMiddle/>
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
                        <h1>analyst</h1>
                        <h4>Data Scientist with expertise in business analysis, data cleansing, dashboard design and
                            development.</h4>
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
        </div>
    );
}

export default HomeTop;