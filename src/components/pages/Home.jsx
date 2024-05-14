import React from 'react';
import MainFrame from "../main/MainFrame";
import HomeBottom from "../HomeBottom";
import HomeTop from "../HomeTop";
import {motion} from "framer-motion"
import Navbar from "../main/Navbar";


function Home() {

    return (
            <MainFrame
                topContent={<HomeTop/>}
                bottomHeading={"CHECK MY WORK"}
                bottomContent={<HomeBottom/>}
            />
    )
}

export default Home;