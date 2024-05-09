import styles from '../../styles/main.module.css'
import TopLeftPanel from "./TopLeftPanel";
import TopRightPanel from "./TopRightPanel";
import TopMiddlePanel from "./TopMiddlePanel";
import {motion} from "framer-motion"

const TopPanel = (
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

            <TopLeftPanel
                content = {topLeftContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
            <TopMiddlePanel
                heading = {heading}
                content = {topMiddleContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
            <TopRightPanel
                content = {topRightContent}
                enterDuration={transitionEnterDuration}
                exitDuration={transitionExitDuration}
                enterDelay={transitionEnterDelay}
                exitDelay={transitionExitDelay}
            />
        </motion.div>
    )
}

export default TopPanel