import React, {useEffect, useState} from 'react';
import styles from "../styles/home.module.css";
import {motion} from "framer-motion";

import Wave1 from "./background/Wave-1";
import Wave3 from "./background/Wave-3";
import Egg1 from "./background/Egg-1";
import HomeTopMiddle from "./ui/HomeTopMiddle";
import head1 from "../assets/img/h1.png";
import head2 from "../assets/img/h2.png";
import ParticlesComponent from "./ui/particles";
import HalfCircle1 from "./background/HalfCircle-1";

const HomeBottom = (props) => {

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
        <motion.div className={styles.bottomContainer}>

            <div className={styles.particlesContainer}>
                <ParticlesComponent
                    onPlay={particleVis}
                    className={styles.particles}
                />
            </div>

            <div className={styles.bottomWrapper}>
                <motion.div className={styles.backgroundContainer}>
                    <Egg1/>
                    <Wave1 className={styles.backgroundAnim}/>
                    <Wave3/>
                </motion.div>
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

            </div>
        </motion.div>
    );
};


export default HomeBottom;