import styles from '../../styles/main.module.css'
import {motion} from "framer-motion"
import TopPanelThree from './TopPanelThree';
import BottomPanel from "./BottomPanel";
import TopPanelTwo from "./TopPanelTwo";
import TopPanel from "./TopPanel";
import Circle1 from "../background/Circle-1";

function MainFrame(props) {


    return (
        <div className={styles.mainContainer}>
            <TopPanel
                className={styles.topPanelContainer}
                content={props.topContent}/>
            <BottomPanel
                className={styles.bottomPanelContainer}
                heading={props.bottomHeading}
                content={props.bottomContent}
            />
        </div>
    )
}

export default MainFrame;