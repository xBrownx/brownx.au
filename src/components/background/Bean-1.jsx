import React from 'react';
import styles from "../styles/background.module.css";
import {ReactComponent as Bean} from "../../assets/background/bean-1.svg";
const Bean1 = () => {
    return (
        <Bean className={styles.bean1} />
    );
};

export default Bean1;