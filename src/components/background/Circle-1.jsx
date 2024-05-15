import React from 'react';
import styles from "../../styles/background.module.css";

const Circle1 = (props) => {
    return (
        <div className={props.className}>
            <div className={styles.circle1Inner}/>
        </div>
    );
};

export default Circle1;