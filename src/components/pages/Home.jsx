import React from 'react';
import MainFrame from "../main/MainFrame";
import TopPanelThree from "../main/TopPanelThree";
import HomeBottom from "../HomeBottom";
import BottomPanel from "../main/BottomPanel";


function Home() {

    return (
        <MainFrame
            TopContent={<>
                <TopPanelThree />
                </>
            }
            bottomHeading={ "CHECK ME OUT" }
            bottomContent={ <BottomPanel /> }
        />
    )
}

export default Home;