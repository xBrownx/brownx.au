import React from "react";
import styles from "./topPanel.module.css";

const TopRightPanel = ({children, duration, state}) => {
    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
        transform: "translateX(100%)"
    };

    const transitionStyles = {
        entering: {transform: "translateX(100%)"},
        entered: {transform: "translateX(0)"}
    };
    return (

        <div className={styles.topRightContainer}
             style={{
                 ...defaultStyle,
                 ...transitionStyles[state]
             }}>

            <div className={styles.content}>
                <h2>developer</h2>
                <h2>scientist</h2>
                <h2>engineer</h2>
            </div>

        </div>
    );
}

export default TopRightPanel;