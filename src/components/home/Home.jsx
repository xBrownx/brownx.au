import React from 'react';
import styles from "./Home.module.css";
import MainFrame from "../main/MainFrame";
import HomePanel1 from "./HomePanel-1";
import HomePanel2 from "./HomePanel-2";
import HomePanel3 from "./HomePanel-3";

function Home() {

    return (
            <MainFrame
                topContent={
                    <div className={styles.homeTopWrapper}>
                        <div className={styles.homeTopContainer}>
                            <HomePanel1/>
                            <HomePanel2/>
                        </div>
                    </div>
                }
                bottomContent={<HomePanel3/>}
            />
    );
}

export default Home;