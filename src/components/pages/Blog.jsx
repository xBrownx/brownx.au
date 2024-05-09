import React from 'react';
import MainFrame from "../main/MainFrame";

function Blog(props) {
    return (
        <MainFrame
            heading={<>light<br/>reading</>}
            topLeftContent={ <></> }
            topMiddleContent={ <></> }
            topRightContent={ <></> }
            bottomHeading={ "READ ABOUT" }
            bottomContent={ <></> }
        />
    );
}

export default Blog;