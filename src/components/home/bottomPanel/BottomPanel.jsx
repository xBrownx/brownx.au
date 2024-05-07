import styles from "../home.module.css";
import Cards from "./Cards";
import Heading from "./Heading";
import ProjectsPanel from "./ProjectsPanel";
import {motion} from "framer-motion"

const BottomPanel = () => {

    return (
        <motion.div
            className={styles.bottomPanelContainer}
            initial={{
                transform: "translateY(100%)",
                transformOrigin: "0 100%",
            }}
            animate={{
                transform: "translateY(0)",
                transformOrigin: "0 100%",
                transition: {
                    duration: 0.5,
                },
            }}
            exit={{
                transform: "translateY(100%)",
                transformOrigin: "0 100%",
                transition: {
                    duration: 0.5,
                }
            }}>
            <Heading/>
            <ProjectsPanel/>
        </motion.div>
    )
}

export default BottomPanel