import styles from '../home.module.css'
import TopLeftPanel from "./TopLeftPanel";
import TopRightPanel from "./TopRightPanel";
import TopMiddlePanel from "./TopMiddlePanel";
import {motion} from "framer-motion"

const TopPanel = () => {

    return (
        <motion.div className={styles.topPanelContainer}>
            <TopLeftPanel/>
            <TopMiddlePanel/>
            <TopRightPanel/>
        </motion.div>
    )
}

export default TopPanel