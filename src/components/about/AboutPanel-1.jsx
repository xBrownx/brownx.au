import React from "react";

import stylesMain from "./About.module.css";
import styles from "./AboutPanel-1.module.css";

import School from "../../assets/icons/school.svg";
import Medal from "../../assets/icons/medal-star.svg";

import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";


const AboutPanel1 = () => {
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
            <div className={styles.container}>

            <div className={styles.headingWrapper}>
                <span className={styles.subHeading}>A little bit</span>
                <span className={styles.heading}>About me</span>
            </div>

                <div className={styles.aboutContainer}>
                    <div className={styles.aboutDetailsContainer}>
                        <img
                            className={styles.icon}
                            src={School}
                            alt="education icon"
                        />
                        <h1>Education</h1>
                        <h2>B.Sc. Computer Science</h2>
                        <h3>University of New England</h3>
                        <h3>Armidale, NSW, Australia</h3>
                    </div>
                    <div className={styles.aboutDetailsContainer}>
                        <img
                            className={styles.icon}
                            src={Medal}
                            alt="occupation icon"
                        />
                        <h1>Occupation</h1>
                        <h2>Business Lead SME</h2>
                        <h3>Sydney Trains || TfNSW</h3>
                        <h3>Sydney, NSW, Australia</h3>
                    </div>
                </div>
            </div>

        </TransformDiv>
    );
}

export default AboutPanel1;