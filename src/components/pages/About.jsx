import React from 'react';
import styles from "../../styles/main.module.css";
import {motion} from "framer-motion"
import AboutBottom from "../AboutBottom";
import MainFrame from "../main/MainFrame";
import AboutTop from "../AboutTop";
import Navbar from "../main/Navbar";

function About() {

    return (
        <MainFrame
            topContent={<AboutTop/>}
            bottomHeading={"CHECK MY WORK"}
            bottomContent={<AboutBottom/>}
        />
    )
}

export default About;