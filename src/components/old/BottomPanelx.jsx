import styles from '../../styles/main.module.css'
import Heading from "../main/Heading";
import {motion} from "framer-motion"

const BottomPanel = (
    {
        heading,
        content,
        transitionEnterDuration,
        transitionExitDuration,
        transitionEnterDelay,
        transitionExitDelay,
    }) => {

    return (
        <motion.div className={styles.bottomPanelContainer}>
            <Heading
                heading={heading}
                transitionEnterDuration={transitionEnterDuration}
                transitionExitDuration={transitionExitDuration}
                transitionEnterDelay={transitionEnterDelay}
                transitionExitDelay={transitionExitDelay}
            />
            {content}
        </motion.div>
    )
}

export default BottomPanel