import styles from "./bottomPanel.module.css";
import TopLeftPanel from "../topPanel/TopLeftPanel";
import TopMiddlePanel from "../topPanel/TopMiddlePanel";
import TopRightPanel from "../topPanel/TopRightPanel";

const Heading = () => {
    return (
        <div className={styles.bottomPanelHeading}>
            <hr className={styles.hr}/>
            <p className={styles.bottomPanelHeadingText}>CHECK MY SHIT OUT</p>
            <hr className={styles.hr}/>
        </div>
    )
}

export default Heading