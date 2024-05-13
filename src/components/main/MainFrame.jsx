import styles from '../../styles/main.module.css'
import {motion} from "framer-motion"
import TopPanelThree from './TopPanelThree';
import BottomPanel from "./BottomPanel";
import TopPanelTwo from "./TopPanelTwo";

function MainFrame(props) {

    const topPanelEnterDuration = 0.5
    const topPanelEnterDelay = 0

    const topPanelExitDuration = 0.5
    const topPanelExitDelay = 0.4

    const bottomPanelEnterDuration = 0.6
    const bottomPanelEnterDelay = 0

    const bottomPanelExitDuration = 0.6
    const bottomPanelExitDelay = 0.4

    return (
        <div className={styles.mainContainer}>

            <TopPanelThree
                className={styles.topPanelContainer}
                heading={props.heading}
                topLeftContent={props.topLeftContent}
                topMiddleContent={props.topMiddleContent}
                topRightContent={props.topRightContent}
                transitionEnterDuration={topPanelEnterDuration}
                transitionEnterDelay={topPanelEnterDelay}
                transitionExitDuration={topPanelExitDuration}
                transitionExitDelay={topPanelExitDelay}
            />
            <BottomPanel
                className={styles.bottomPanelContainer}
                heading={props.bottomHeading}
                content={props.bottomContent}
                transitionEnterDuration={bottomPanelEnterDuration}
                transitionEnterDelay={bottomPanelEnterDelay}
                transitionExitDuration={bottomPanelExitDuration}
                transitionExitDelay={bottomPanelExitDelay}
            />
        </div>
    )
}

export default MainFrame;