import React from 'react';
import MainFrame from "../main/MainFrame";
import HomeBottom from "../HomeBottom";
import HomeTopMiddle from "../HomeTopMiddle";
import HomeTopLeft from "../HomeTopLeft";
import HomeTopRight from "../HomeTopRight";


function Home() {

    return (
        <MainFrame
            topLeftContent={ <HomeTopLeft /> }
            topMiddleContent={ <HomeTopMiddle /> }
            topRightContent={ <HomeTopRight /> }
            bottomHeading={ "CHECK ME OUT" }
            bottomContent={ <HomeBottom/> }
        />
    )
}

export default Home;