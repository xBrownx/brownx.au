import styles from '../../styles/main.module.css'
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";

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