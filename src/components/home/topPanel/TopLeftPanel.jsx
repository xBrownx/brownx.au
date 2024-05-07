import React from "react";
import styles from "./topPanel.module.css";

const TopLeftPanel = ({duration, state}) => {

    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
        transform: "translateX(-100%)"
    };

    const transitionStyles = {
        entering: {transform: "translateX(-100%)"},
        entered: {transform: "translateX(0)"}
    };

    return (
        <div className={styles.topLeftContainer}
             style={{
                 ...defaultStyle,
                 ...transitionStyles[state]
             }}>
            <div className={styles.content}>
                <h1>andrew<br/>brown</h1>
            </div>

        </div>
    );
}

export default TopLeftPanel;