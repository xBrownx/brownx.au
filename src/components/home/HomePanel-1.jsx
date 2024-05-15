import React from "react";
import stylesMain from "./home.module.css";
import styles from "./HomePanel-1.module.css";
import Wave2 from "../background/Wave-2";
import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";
import Circle1 from "../background/Circle-1";
import Egg1 from "../background/Egg-1";
import Blob1 from "../background/Blob-1";

const HomePanel1 = () => {
    return (

        <TransformDiv
            className={stylesMain.topLeftContainer}
            initPosition={"translateX(-100%)"}
            animPosition={"translateX(0)"}
            exitPosition={"translateX(-100%)"}
            animDuration={0.5}
            exitDuration={0.5}
            animDelay={0}
            exitDelay={0.5}
        >
            <FadeDiv
                className={stylesMain.textContainer}
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
                className={stylesMain.backgroundContainer}
                initPosition={"translateX(100%)"}
                animPosition={"translateX(0)"}
                exitPosition={"translateX(100%)"}
                animDuration={0.5}
                exitDuration={0.5}
                animDelay={0}
                exitDelay={0.5}
            >
                <Circle1 className={styles.circle1}/>
                <Wave2 className={styles.wave2}/>
                <Blob1 className={styles.blob1}/>
            </TransformDiv>
        </TransformDiv>
    );
}

export default HomePanel1;