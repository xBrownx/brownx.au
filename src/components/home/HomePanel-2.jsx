import React from "react";
import {Link} from "react-router-dom";
import stylesMain from "./Home.module.css";
import styles from "./HomePanel-2.module.css"

import {ReactComponent as LinkedIn} from '../../assets/icons/linkedin.svg';
import {ReactComponent as Github} from '../../assets/icons/github.svg';
import {ReactComponent as Email} from '../../assets/icons/email.svg';
import {ReactComponent as Swirl1} from "../../assets/background/swirl-1.svg";
import {ReactComponent as Bean1} from "../../assets/background/bean-1.svg";
import {ReactComponent as Wave6} from "../../assets/background/wave-6.svg";

import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";


const HomePanel2 = (props) => {
    return (
        <TransformDiv
                    className={stylesMain.topRightContainer}
                    initPosition={"translateX(100%)"}
                    animPosition={"translateX(0)"}
                    exitPosition={"translateX(100%)"}
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
                        <h2>Hey! I'm</h2>
                        <h1>Andrew Brown</h1>
                        <p>Fullstack Software Developer</p>
                        <div className={styles.btnContainer}>
                            <Link to={'/about'}>
                                <button className={[styles.btn, styles.btn1].join(' ')}>
                                    about
                                </button>
                            </Link>
                            <Link to={'/projects'}>
                                <button className={[styles.btn, styles.btn2].join(' ')}>
                                    projects
                                </button>
                            </Link>
                        </div>
                        <div className={styles.socialsContainer}>
                            <LinkedIn className={styles.icon}/>
                            <Github className={styles.icon}/>
                            <Email className={styles.icon}/>
                        </div>
                    </FadeDiv>

                    <TransformDiv
                        className={stylesMain.backgroundContainer}
                        initPosition={"translateX(-100%)"}
                        animPosition={"translateX(0)"}
                        exitPosition={"translateX(-100%)"}
                        animDuration={0.5}
                        exitDuration={0.5}
                        animDelay={0}
                        exitDelay={0.5}
                    >
                        <Wave6 className={styles.wave6}/>
                        <Swirl1 className={styles.swirl1}/>
                        <Bean1 className={styles.bean1}/>
                    </TransformDiv>
                </TransformDiv>
    );
}

export default HomePanel2;