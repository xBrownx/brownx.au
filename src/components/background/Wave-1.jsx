import React from 'react';
import styles from "../styles/background.module.css";
import {ReactComponent as Wave} from "../../assets/background/wave-1.svg";
const Wave1 = () => {
    return (
        <Wave className={styles.wave1} />
    );
};

export default Wave1;