import styles from '../../styles/main.module.css'
import {motion} from "framer-motion"


const TopPanel = (props) => {

    return (
        <motion.div className={styles.topPanelContainer}>
            {props.content}
        </motion.div>
    )
}

export default TopPanel