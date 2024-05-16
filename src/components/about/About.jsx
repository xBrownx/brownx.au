import React from 'react';
import styles from "./About.module.css";
import MainFrame from "../main/MainFrame";

import AboutPanel1 from "./AboutPanel-1";
import AboutPanel2 from "./AboutPanel-2";
import AboutPanel3 from "./AboutPanel-3";


function About() {

    return (
        <MainFrame
                topContent={
                    <div className={styles.aboutTopWrapper}>
                        <div className={styles.aboutTopContainer}>
                            <AboutPanel1/>
                            <AboutPanel2/>
                        </div>
                    </div>
                }
                bottomContent={<AboutPanel3/>}
            />
    )
}

export default About;