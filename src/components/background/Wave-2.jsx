import React from 'react';
import styles from "../styles/background.module.css";
import {ReactComponent as Wave} from "../../assets/background/wave-2.svg";
const Wave2 = () => {
    return (
        <Wave className={styles.wave2} />
    );
};

export default Wave2;