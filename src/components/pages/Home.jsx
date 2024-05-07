import styles from '../home/home.module.css'
import {motion} from "framer-motion"
import TopPanel from "../home/topPanel/TopPanel";
import BottomPanel from "../home/bottomPanel/BottomPanel";

function Home() {
    return (
        <motion.div className={styles.mainContainer}>
            <TopPanel className={styles.topPanelContainer}/>
            <BottomPanel className={styles.bottomPanelContainer}/>
        </motion.div>
    )
}

export default Home;