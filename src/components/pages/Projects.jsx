import React from 'react';
import MainFrame from "../main/MainFrame";

function Projects(props) {
    return (
        <MainFrame
            heading={<>my<br/>work</>}
            topLeftContent={ <></> }
            topMiddleContent={ <></> }
            topRightContent={ <></> }
            bottomHeading={ "SOME OF MY WORK" }
            bottomContent={ <></> }
        />
    );
}

export default Projects;