import React from 'react';
import MainFrame from "../main/MainFrame";
import HomeBottom from "../HomeBottom";
import HomeTopMiddle from "../HomeTopMiddle";
import HomeTopLeft from "../HomeTopLeft";
import HomeTopRight from "../HomeTopRight";


function Home() {

    return (
        <MainFrame
            topLeftContent={ <></> }
            topMiddleContent={ <></> }
            topRightContent={ <></> }
            bottomHeading={ "CHECK ME OUT" }
            bottomContent={ <></> }
        />
    )
}

export default Home;