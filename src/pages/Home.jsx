import React, {useEffect, useState} from 'react';
import styles from './home.module.css'
import './Home.css'
import '../components/Cards.css';
import head1 from '../assets/img/h1.png'
import head2 from '../assets/img/h2.png'
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import Cards from "../components/Cards";


function Home() {

    const [landingLogoVis, setLandingLogoVis] = useState(1)
    useEffect(() => {
        setLandingLogoVis(0)

    }, [])

    return (
        <div className={styles.mainContainer}>
            {/*<div className="logo-container">*/}
            {/*    <Logo className='logo-landing' style={{*/}
            {/*        margin: '0',*/}
            {/*        padding: '0',*/}
            {/*        opacity: landingLogoVis,*/}
            {/*        transition: "all 1.0s",*/}
            {/*        transitionDelay: '1s',*/}
            {/*    }}/>*/}
            {/*</div>*/}

            <div className={styles.topPanelContainer}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.mainImg}
                        src={head1}
                        onMouseOver={e => (e.currentTarget.src = head2)}
                        onMouseOut={e => (e.currentTarget.src = head1)}
                        alt=""/>
                </div>
            </div>

            <div className={styles.bottomPanelContainer}>
                <div className={styles.bottomPanelHeading}>
                    <hr className={styles.hr}/>
                    <p className={styles.bottomPanelHeadingText}>SOME OF MY WORK</p>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.projectsContainer}>
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default Home;