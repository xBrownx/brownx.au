import React from 'react';
import styles from "../../styles/background.module.css";
import {ReactComponent as Swirl} from "../../assets/background/swirl-1.svg";
const Swirl1 = (props) => {
    return (
        <Swirl className={props.className} />
    );
};

export default Swirl1;