import React from 'react';
import styles from '../styles/about.module.css'
import {motion} from "framer-motion"
import Wave1 from "./background/Wave-1";
import TopPanelThree from "./main/TopPanelThree";
import BottomPanel from "./main/BottomPanel";
import TopPanelTwo from "./main/TopPanelTwo";
const AboutTop = (props) => {
    return (
        <div className={styles.aboutTop}>
            <TopPanelTwo
                className={styles.topPanelContainer}
                heading={props.heading}
                topLeftContent={props.topLeftContent}
                topMiddleContent={props.topMiddleContent}
                topRightContent={props.topRightContent}
                transitionEnterDuration={props.topPanelEnterDuration}
                transitionEnterDelay={props.topPanelEnterDelay}
                transitionExitDuration={props.topPanelExitDuration}
                transitionExitDelay={props.topPanelExitDelay}
            />
            <BottomPanel
                className={styles.bottomPanelContainer}
                heading={props.bottomHeading}
                content={props.bottomContent}
                transitionEnterDuration={props.bottomPanelEnterDuration}
                transitionEnterDelay={props.bottomPanelEnterDelay}
                transitionExitDuration={props.bottomPanelExitDuration}
                transitionExitDelay={props.bottomPanelExitDelay}
            />
        </div>
    );
};

export default AboutTop;