import styles from "../styles/main.module.css";
import {motion} from "framer-motion"

const Heading = (
    {
        heading,
        transitionEnterDuration,
        transitionExitDuration,
        transitionEnterDelay,
        transitionExitDelay,
    }) => {
    return (
        <div className={styles.bottomPanelHeading}>
            <motion.hr
                className={styles.hr}
                initial={{
                    transform: "translateX(-250%)"
                }}
                animate={{
                    transform: "translateX(0)",
                    transition: {
                        duration: transitionEnterDuration,
                        delay: transitionEnterDelay + 0.4,
                    }
                }}
                exit={{
                    transform: "translateX(-200%)",
                    transition: {
                        duration: transitionExitDuration,
                        delay: 0,
                    }
                }}
            />
            <motion.p
                className={styles.bottomPanelHeadingText}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: transitionEnterDuration,
                        delay: transitionEnterDelay + 0.8,
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: transitionExitDuration,
                        delay: 0.2,
                    }
                }}
            >
                {heading}
            </motion.p>
            <motion.hr
                className={styles.hr}
                initial={{
                    transform: "translateX(250%)"
                }}
                animate={{
                    transform: "translateX(0)",
                    transition: {
                        duration: transitionEnterDuration,
                        delay: transitionEnterDelay + 0.4,
                    }
                }}
                exit={{
                    transform: "translateX(250%)",
                    transition: {
                        duration: transitionExitDuration,
                        delay: 0,
                    }
                }}
            />
        </div>
    )
}

export default Heading