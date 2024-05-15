import React from 'react';
import MainFrame from "../main/MainFrame";
import HomePanel3 from "../home/HomePanel-3";
import styles from "../home/home.module.css";
import HomePanel1 from "../home/HomePanel-1";
import HomePanel2 from "../home/HomePanel-2";


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
                bottomHeading={"CHECK MY WORK"}
                bottomContent={<HomePanel3/>}
            />
    );
}

export default Home;