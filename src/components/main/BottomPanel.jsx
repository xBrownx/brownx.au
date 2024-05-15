import styles from '../../styles/main.module.css'
import {motion} from "framer-motion"

const BottomPanel = (props) => {
    return (
        <motion.div className={styles.bottomPanelContainer}>
            {props.content}
        </motion.div>
    )
}

export default BottomPanel