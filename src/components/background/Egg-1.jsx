import React from 'react';
import styles from "../../styles/background.module.css";
import {ReactComponent as Egg} from "../../assets/background/egg-3.svg";

const Egg1 = (props) => {
    return (
            <Egg className={props.className}/>
    );
};

export default Egg1;