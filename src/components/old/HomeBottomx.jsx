import React from 'react';
import styles from "../home/Home.module.css";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import ph1 from "../../assets/img/ph1.webp";
import ph2 from "../../assets/img/ph2.jpg";
import ph3 from "../../assets/img/ph3.jpg";
import ph4 from "../../assets/img/ph6.jpg";


const HomeBottom = () => {
    return (
        <motion.div className={styles.bottomContainer}>
            <div className={styles.bottomWrapper}>
                <ul>
                    <AboutBox
                        src={ph2}
                        text="Eagle Eye Vision"
                        subText='Commercial drone safety mobile app'
                        label='Java/Kotlin/Python'
                        path='/'
                        delayEnter={0.2}
                        delayExit={0.3}
                    />
                    <AboutBox
                        src={ph3}
                        text="Next"
                        subText='Night life Social media mobile app'
                        label='Kotlin/Python'
                        path='/'
                        delayEnter={0.3}
                        delayExit={0.2}
                    />
                    <AboutBox
                        src={ph4}
                        text='Two-Do'
                        subText='Shared to-do list mobile app'
                        label='Kotlin/Python'
                        path='/'
                        delayEnter={0.4}
                        delayExit={0.1}
                    />
                    <AboutBox
                        src={ph1}
                        text='This Website'
                        subText='Designed and developed by me!'
                        label='React.js'
                        path='/'
                        delayEnter={0.5}
                        delayExit={0}
                    />
                </ul>
            </div>
            <motion.div
                className={styles.backgroundContainer}
            >

            </motion.div>
        </motion.div>
    );
};

function AboutBox({title, content, ...props}) {

    return (
        <motion.li
            className={styles.aboutBox}
            initial={{
                transform: "translateY(200%)"
            }}
            animate={{
                transform: "translateY(0)",
                transition: {
                    delay: props.delayEnter,
                    duration: 0.2
                }
            }}
            exit={{
                transform: "translateY(200%)",
                transition: {
                    delay: props.delayExit,
                    duration: 0.2
                }
            }}
        >
            <Link className={styles.aboutLink} to={props.path}>
                <figure className={styles.aboutPicWrapper} data-category={props.label}>
                    <img
                        className={styles.aboutImg}
                        alt={'Project Image'}
                        src={props.src}
                    />
                </figure>
                <div className={styles.aboutInfo}>
                    <h5 className={styles.aboutText}>{props.text}</h5>
                    <p className={styles.aboutSubText}>{props.subText}</p>
                </div>
            </Link>
        </motion.li>
    )
}

export default HomeBottom;