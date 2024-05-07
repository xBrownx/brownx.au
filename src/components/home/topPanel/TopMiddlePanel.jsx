import React, {useEffect, useState} from "react";
import styles from "./topPanel.module.css";
import ParticlesComponent from "../../particles";
import head1 from "../../../assets/img/h1.png";
import head2 from "../../../assets/img/h2.png";
import {Transition} from "react-transition-group";

const TopMiddlePanel = ({children, duration, state, transitionState}) => {

    const defaultStyle = {
        transition: `transform ${duration}ms`,
        transform: "rotateX(90deg)",
        transformOrigin: "0 100%",
        transitionDelay: `${duration * 0.9}ms`,
    };

    const [imgSrc, setImgSrc] = useState(head1);

    const [particleVis, setParticleVis] = useState(false);

    const transitionStyles = {
        entering: {
            transform: "rotateX(90deg)"
        },
        entered: {
            transform: "rotateX(0deg)"
        }
    };

    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

    function toggleHead(state) {
        if (state) {
            setTimeout(async function () {
                for (let i = 0; i < 4; i++) {
                    setImgSrc(head2);
                    await delay(100);
                    setImgSrc(head1);
                    await delay(100);
                }
            }, 2400)
        }
    }

    useEffect(() => {
        setParticleVis(false)
        toggleHead(transitionState);
    }, [transitionState])

    return (
        <div
            className={styles.topMiddleContainer}
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>

            <div className={styles.particlesContainer}>
                <ParticlesComponent
                    onPlay={particleVis}
                    className={styles.particles}
                />
            </div>

            <img
                className={styles.mainImg}
                src={imgSrc}
                onMouseOver={e => (
                    setParticleVis(true), setImgSrc(head2)
                )
                }

                onMouseOut={e => (
                    setParticleVis(false), setImgSrc(head1)
                )
                }
                alt=""
            />
        </div>
    )
}

export default TopMiddlePanel;