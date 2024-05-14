import React from 'react';
import MainFrame from "../main/MainFrame";
import HomeBottom from "../HomeBottom";
import HomeTop from "../HomeTop";



function Home() {

    return (
        <MainFrame
            topContent={<HomeTop/>}
            bottomHeading={ "CHECK MY WORK" }
            bottomContent={ <HomeBottom/> }
        />
    )
}

export default Home;