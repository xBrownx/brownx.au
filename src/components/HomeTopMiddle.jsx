import React, {useEffect, useState} from "react";
import styles from "../styles/home.module.css";
import ParticlesComponent from "./ui/particles";
import head1 from "../assets/img/h1.png";
import head2 from "../assets/img/h2.png";
import {motion} from "framer-motion"

const HomeTopMiddle = () => {

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
        </motion.div>
    )
}

export default HomeTopMiddle;