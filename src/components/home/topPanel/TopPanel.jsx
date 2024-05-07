import styles from '../home.module.css'
import TopLeftPanel from "./TopLeftPanel";
import TopRightPanel from "./TopRightPanel";
import TopMiddlePanel from "./TopMiddlePanel";

const TopPanel = ({children, duration, state, transitionState}) => {

    return (
        <div className={styles.topPanelContainer}>
            <TopLeftPanel
                duration={duration}
                state={state}
            />
            <TopMiddlePanel
                duration={duration}
                state={state}
                transitionState={transitionState}
            />
            <TopRightPanel
                duration={duration}
                state={state}
            />
        </div>
    )
}

export default TopPanel