import styles from '../../styles/main.module.css'
import '../../App.css'
import {motion} from "framer-motion"
import TopPanel from './TopPanel';
import BottomPanel from "./BottomPanel";

function MainFrame({ heading, topLeftContent, topMiddleContent, topRightContent, bottomHeading, bottomContent }) {

    const topPanelEnterDuration = 0.5
    const topPanelEnterDelay = 0

    const topPanelExitDuration = 0.5
    const topPanelExitDelay = 0.4

    const bottomPanelEnterDuration = 0.6
    const bottomPanelEnterDelay = 0

    const bottomPanelExitDuration = 0.6
    const bottomPanelExitDelay = 0.4

    return (
        <motion.div className={styles.mainContainer}>
            <TopPanel
                heading={heading}
                className={styles.topPanelContainer}
                topLeftContent={topLeftContent}
                topMiddleContent={topMiddleContent}
                topRightContent={topRightContent}
                transitionEnterDuration={topPanelEnterDuration}
                transitionEnterDelay={topPanelEnterDelay}
                transitionExitDuration={topPanelExitDuration}
                transitionExitDelay={topPanelExitDelay}
            />
            <BottomPanel
                className={styles.bottomPanelContainer}
                heading={bottomHeading}
                content={bottomContent}
                transitionEnterDuration={bottomPanelEnterDuration}
                transitionEnterDelay={bottomPanelEnterDelay}
                transitionExitDuration={bottomPanelExitDuration}
                transitionExitDelay={bottomPanelExitDelay}
            />
        </motion.div>
    )
}

export default MainFrame;