import styles from '../../styles/main.module.css'
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import useMouseShadow from "../ui/MouseShadow";

function MainFrame(props) {

    const shadow = useMouseShadow();

    return (
        <div id="mainContainer" className={styles.mainContainer}
        style={{
            boxShadow: `${shadow.x}px ${shadow.y}px 10px 10px rgba(56, 125, 255, 0.2)`,
            transition: `all 300ms ease`
        }}>
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