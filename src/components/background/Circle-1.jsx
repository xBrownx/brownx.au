import React from 'react';
import styles from "../styles/background.module.css";

const Circle1 = () => {
    return (
        <div className={styles.circle1Outer}>
            <div className={styles.circle1Inner}/>
        </div>
    );
};

export default Circle1;