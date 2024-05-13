import styles from '../../styles/main.module.css'
import {motion} from "framer-motion"
import Egg1 from "../background/Egg-1";
import Swirl1 from "../background/Swirl-1";
import HalfCircle1 from "../background/HalfCircle-1";
import Circle1 from "../background/Circle-1";
import Wave1 from "../background/Wave-1";
import Wave4 from "../background/Wave-4";
import Wave2 from "../background/Wave-2";
import Wave3 from "../background/Wave-3";
import Blob1 from "../background/Blob-1";

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
            <div className={styles.topPanel}>
                {/*<Wave1 className={styles.wave1}/>*/}
                {props.TopContent}
            </div>
            <div className={""}>
                {props.bottomContent}
            </div>
            {/*<Circle1 />*/}

            {/*<Wave2 />*/}
            {/*<Wave3 />*/}
            {/*<Wave4 />*/}
            {/*<Egg1 />*/}
            {/*<Swirl1 />*/}
            {/*<Blob1 />*/}

        </div>
    )
}

export default MainFrame;