import React from 'react';
import styles from "../../styles/background.module.css";
import {ReactComponent as Blob} from "../../assets/background/blob-1.svg";
const Blob1 = (props) => {
    return (
        <Blob className={props.className} />
    );
};

export default Blob1;