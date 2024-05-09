import styles from '../../styles/main.module.css'
import Heading from "./Heading";
import {motion} from "framer-motion"
import Bean1 from "../background/Bean-1";
import Circle2 from "../background/Circle-2";

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
        <motion.div
            className={styles.bottomPanelContainer}
            // initial={{
            //     height: 0,
            //     flex: 0
            // }}
            // animate={{
            //     height: "100%",
            //     flex: 1.4,
            //     transition: {
            //         duration: transitionEnterDuration,
            //         delay: transitionEnterDelay,
            //     }
            // }}
            // exit={{
            //     height: 0,
            //     flex: 0,
            //     transition: {
            //         duration: transitionExitDuration,
            //         delay: transitionExitDelay,
            //     }
            // }}>
            >
            <Bean1 />
            <Circle2 />
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