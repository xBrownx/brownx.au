import styles from '../../styles/main.module.css'
import TopLeftPanel from "./TopLeftPanel";
import TopRightPanel from "./TopRightPanel";
import {motion} from "framer-motion"
import FeatureFrame from "./FeatureFrame";

const TopPanelThree = (
    {
        heading,
        topLeftContent,
        topMiddleContent,
        topRightContent,
        transitionEnterDuration,
        transitionExitDuration,
        transitionEnterDelay,
        transitionExitDelay,
    }) => {

    return (
        <motion.div className={styles.topPanelContainer}>
            {/*<div className={styles.topLeftContainer}/>*/}
            {/*<div className={styles.topMiddleContainer}/>*/}
            {/*<div className={styles.topRightContainer}/>*/}
            <TopLeftPanel
                className={styles.topLeftContainer}
                content = {topLeftContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
            <FeatureFrame
                heading = {heading}
                content = {topMiddleContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
            <TopRightPanel
                className={styles.topRightContainer}
                content = {topRightContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
        </motion.div>
    )
}

export default TopPanelThree