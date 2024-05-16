import React from "react";

import stylesMain from "./Home.module.css";
import styles from "./HomePanel-1.module.css";

import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";

import {ReactComponent as Brownx} from "../../assets/img/logo.svg";
import {ReactComponent as Blob1} from "../../assets/background/blob-1.svg";
import {ReactComponent as Wave2} from "../../assets/background/wave-2.svg";

import Tick from "../../assets/icons/circle-tick.svg";

import Circle1 from "../background/Circle-1";


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
            <div className={styles.wrapper}>

                <TransformDiv
                    className={styles.wrapper}
                    initPosition={"translateY(-100%)"}
                    animPosition={"translateY(0)"}
                    exitPosition={"translateY(-100%)"}
                    animDuration={0.5}
                    exitDuration={0.5}
                    animDelay={0.5}
                    exitDelay={0}
                >
                    <Brownx className={styles.brownx}/>
                </TransformDiv>

                <FadeDiv
                    className={styles.articleContainer}
                    animDuration={0.5}
                    exitDuration={0.5}
                    animDelay={0.5}
                    exitDelay={0}
                >

                    <article>
                        <img
                            src={Tick}
                            alt="experience icon"
                            className={styles.icon}
                        />
                        <div>
                            <h3>Mobile</h3>
                        </div>
                    </article>

                    <article>
                        <img
                            src={Tick}
                            alt="experience icon"
                            className={styles.icon}
                        />
                        <div>
                            <h3>Web</h3>
                        </div>
                    </article>

                    <article>
                        <img
                            src={Tick}
                            alt="experience icon"
                            className={styles.icon}
                        />
                        <div>
                            <h3>Frontend</h3>
                        </div>
                    </article>

                    <article>
                        <img
                            src={Tick}
                            alt="experience icon"
                            className={styles.icon}
                        />
                        <div>
                            <h3>Backend</h3>
                        </div>
                    </article>


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

                </TransformDiv>
            </div>
        </TransformDiv>
    );
}

export default HomePanel1;