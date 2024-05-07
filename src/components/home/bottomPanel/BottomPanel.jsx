import styles from "../home.module.css";
import Cards from "./Cards";
import Heading from "./Heading";
import ProjectsPanel from "./ProjectsPanel";

const BottomPanel = ({duration, state, transitionState}) => {

    const defaultStyle = {
        transition: `transform ${duration * 0.8}ms ease-in-out`,
        transform: "translateY(100%)"
    };

    const transitionStyles = {
        entering: {transform: "translateY(100%)"},
        entered: {transform: "translateY(0)"}
    };

    return (
        <div
            className={styles.bottomPanelContainer}
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
            <Heading/>
            <ProjectsPanel/>
        </div>
    )
}

export default BottomPanel