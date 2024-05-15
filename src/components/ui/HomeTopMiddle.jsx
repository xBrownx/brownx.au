import React, {useEffect, useState} from "react";
import styles from "../../styles/home.module.css";
import ParticlesComponent from "./particles";
import head1 from "../../assets/img/h1.png";
import head2 from "../../assets/img/h2.png";
import {motion} from "framer-motion"
import HalfCircle1 from "../background/HalfCircle-1";
import Blob1 from "../background/Blob-1";
import Wave1 from "../background/Wave-1";
import Wave3 from "../background/Wave-3";
import Swirl1 from "../background/Swirl-1";
import Wave4 from "../background/Wave-4";

const HomeTopMiddle = (props) => {

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
        <motion.div className={styles.topMiddleContainer}>
            <div className={styles.particlesContainer}>
                <ParticlesComponent
                    onPlay={particleVis}
                    className={styles.particles}
                />
            </div>

            <HalfCircle1
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
                className={styles.backgroundContainer}
                initial={{
                    opacity: 0,
                    transform: "translateY(-100%)",
                    zIndex: -1
                }}
                animate={{
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: {
                        duration: 0.4,
                        delay: 0.3
                    },
                    zIndex: -1
                }}
                exit={{
                    opacity: 0,
                    transform: "translateY(-100%)",
                    transition: {
                        duration: 0.4,
                        delay: 0
                    },
                    zIndex: -1
                }}>
                <Swirl1/>
            </motion.div>
            <motion.div
                className={styles.backgroundContainer}
                initial={{
                    opacity: 0,
                    transform: "translateY(-100%)",
                    zIndex: -1
                }}
                animate={{
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: {
                        duration: 0.4,
                        delay: 0.5
                    },
                    zIndex: -1
                }}
                exit={{
                    opacity: 0,
                    transform: "translateY(-100%)",
                    transition: {
                        duration: 0.4,
                        delay: 0
                    },
                    zIndex: -1
                }}>
                <Wave4/>
            </motion.div>
        </motion.div>
    )
}

export default HomeTopMiddle;