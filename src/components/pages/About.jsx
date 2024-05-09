import React from 'react';
import MainFrame from "../main/MainFrame";
import AboutTopMiddle from "../AboutTopMiddle";
import AboutBottom from "../AboutBottom";

function About() {

    return (
        <MainFrame
            heading={<>andrew<br/>brown</>}
            topLeftContent={ <></> }
            topMiddleContent={ <AboutTopMiddle />}
            topRightContent={ <></> }
            bottomHeading={ "MORE ABOUT ME" }
            bottomContent={ <AboutBottom /> }
        />
    )
}

export default About;