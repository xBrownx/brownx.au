import React, {useEffect, useState} from "react";
import styles from "./topPanel.module.css";
import ParticlesComponent from "../../particles";
import head1 from "../../../assets/img/h1.png";
import head2 from "../../../assets/img/h2.png";
import {motion} from "framer-motion"

const TopMiddlePanel = ({children, duration, state, transitionState}) => {

    const [imgSrc, setImgSrc] = useState(head1);
    const [particleVis, setParticleVis] = useState(false);

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
            {/*<div className={styles.heading}>*/}
            {/*    <h1>andrew</h1>*/}
            {/*</div>*/}
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
                onMouseOver={e => (setParticleVis(true), setImgSrc(head2))}
                onMouseOut={e => (setParticleVis(false), setImgSrc(head1))}
                initial={{
                    transform: "translateY(100%) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                }}
                animate={{
                    transform: "translateY(0) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                }}
                exit={{
                    transform: "translateY(100%) translate(-50%, 0)",
                    transformOrigin: "0 100%",
                    transition: {
                        duration: 0.6,
                        delay: 0
                    }
                }}
                onAnimationComplete={() =>
                    toggleHead()
                }
            />
        </motion.div>
    )
}

export default TopMiddlePanel;