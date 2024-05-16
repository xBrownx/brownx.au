import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import stylesMain from "./Home.module.css";
import styles from "./HomePanel-3.module.css"

import head1 from "../../assets/img/h1.png";
import head2 from "../../assets/img/h2.png";
import {ReactComponent as Wave1} from "../../assets/background/wave-1.svg";
import {ReactComponent as Egg3} from "../../assets/background/egg-3.svg";
import {ReactComponent as Wave5} from "../../assets/background/wave-5.svg";

import HalfCircle1 from "../background/HalfCircle-1";

import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";
import ParticlesComponent from "../ui/particles";
import Circle2 from "../background/Circle-2";


const HomePanel3 = (props) => {

    const [imgSrc, setImgSrc] = useState(head1);
    const [particleVis, setParticleVis] = useState(false);

    function showBrainExplosion(isShow) {
        setParticleVis(isShow);
        setImgSrc(isShow ? head2 : head1);
    }

    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

    async function toggleHead() {
        for (let i = 0; i < 4; i++) {
            setImgSrc(head2);
            await delay(100);
            setImgSrc(head1);
            await delay(100);
        }
    }

    useEffect(() => {
        setParticleVis(false)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.particlesContainer}>
                <ParticlesComponent
                    onPlay={particleVis}
                    className={styles.particles}
                />
            </div>

            <HalfCircle1
                className={styles.halfCircle1}
                enterDuration={props.enterDuration}
                exitDuration={props.exitDuration}
                enterDelay={props.enterDelay}
                exitDelay={props.exitDelay}
            />
            <motion.img
                className={styles.mainImg}
                src={imgSrc}
                alt=""
                onMouseOver={e => (showBrainExplosion(true))}
                onMouseOut={e => (showBrainExplosion(false))}

                initial={{
                    opacity: 0,
                    transform: "translateY(100%) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                }}

                animate={{
                    opacity: 1,
                    transform: "translateY(0) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                    transition: {
                        duration: 0.4,
                        delay: 0.8
                    },
                }}

                exit={{
                    opacity: 0,
                    transform: "translateY(100%) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                    transition: {
                        duration: 0.4,
                        delay: 0
                    },
                    transitionEnd: {
                        display: "none",
                    }
                }}

                onAnimationComplete={() =>
                    toggleHead()
                }
            />

            <motion.div
                className={stylesMain.backgroundContainer}

                initial={{
                    scale: 0,
                    rotate: '-540deg',
                    translate: '25%',
                }}

                animate={{
                    scale: 1,
                    rotate: '0deg',
                    translate: '0',
                    transition: {
                        duration: 0.6,
                        delay: 0
                    },
                }}

                exit={{
                    scale: 0,
                    rotate: '-540deg',
                    translate: '25%',
                    transition: {
                        duration: 0.6,
                        delay: 0.5
                    },
                }}
            >
                <Wave1 className={styles.wave1}/>
            </motion.div>

            <TransformDiv
                className={stylesMain.backgroundContainer}
                initPosition={"translateY(100%)"}
                animPosition={"translateY(0)"}
                exitPosition={"translateY(100%)"}
                animDuration={0.5}
                exitDuration={0.5}
                animDelay={0.5}
                exitDelay={0.1}
            >
                <Egg3 className={styles.egg3}/>
            </TransformDiv>

            <TransformDiv
                className={stylesMain.backgroundContainer}
                initPosition={"translateY(-100%)"}
                animPosition={"translateY(0)"}
                exitPosition={"translateY(-100%)"}
                animDuration={0.5}
                exitDuration={0.5}
                animDelay={0.7}
                exitDelay={0.2}
            >
                <Circle2 className={styles.circle2}/>
            </TransformDiv>
        </div>
    );
};


export default HomePanel3;