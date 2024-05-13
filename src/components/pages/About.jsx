import React from 'react';
import TopPanelThree from "../main/TopPanelThree";
import styles from "../../styles/main.module.css";
import BottomPanel from "../main/BottomPanel";
import {motion} from "framer-motion"
import AboutTopMiddle from "../AboutTopMiddle";
import AboutBottom from "../AboutBottom";
import TopPanelTwo from "../main/TopPanelTwo";
import AboutTop from "../AboutTop";

function About() {

    return (
        <motion.div className={styles.mainContainer}>
        <AboutTop />
            <BottomPanel
                className={styles.bottomPanelContainer}
                heading={"MORE ABOUT ME" }
                content={<AboutBottom />}
                transitionEnterDuration={0.6}
                transitionEnterDelay={0}
                transitionExitDuration={0.6}
                transitionExitDelay={0.4}
            />
        {/*// <MainFrame*/}
        {/*//     heading={<>andrew<br/>brown</>}*/}
        {/*//     topLeftContent={ <></> }*/}
        {/*//     topMiddleContent={ <AboutTopMiddle />}*/}
        {/*//     topRightContent={ <></> }*/}
        {/*//     bottomHeading={ "MORE ABOUT ME" }*/}
        {/*//     bottomContent={ <AboutBottom /> }*/}
        {/*// />*/}
            </motion.div>
    )
}

export default About;