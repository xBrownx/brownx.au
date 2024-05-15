import React from 'react';
import styles from "../../styles/background.module.css";
import {ReactComponent as Egg} from "../../assets/background/egg-3.svg";

const Egg1 = () => {
    return (
        <div className={styles.backgroundContainer}>
            <Egg className={styles.egg1}/>
        </div>
    );
};

export default Egg1;