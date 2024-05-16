import React from "react";
import {Link} from "react-router-dom";
import stylesMain from "./About.module.css";
import styles from "./AboutPanel-2.module.css";
import {motion} from "framer-motion";
import TransformDiv from "../ui/TransformDiv";
import FadeDiv from "../ui/FadeDiv";
import PieChart from "../ui/PieChart";

const AboutPanel2 = (props) => {
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

            <div className={styles.pieChart}>
                <PieChart/>
            </div>
            {/*<div className={styles.aboutContainer}>*/}

            {/*</div>*/}
        </TransformDiv>
);
}

export default AboutPanel2;