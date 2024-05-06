import styles from './home.module.css'
import head1 from '../../assets/img/h1.png'
import head2 from '../../assets/img/h2.png'
import Cards from "../Cards"
import ParticlesComponent from '../particles'
import {useEffect, useState} from "react";

function Home() {

    const [particleVis, setParticleVis] = useState(false);
    useEffect(() => {
        setParticleVis(false)
    }, [])
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topPanelContainer}>


                <div className={styles.particlesContainer}>

                    <ParticlesComponent
                        className={styles.particlesContainer}
                        onPlay={particleVis}
                    />

                </div>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.mainImg}
                        src={head1}
                        onMouseOver={e => (
                            e.currentTarget.src = head2,
                                setParticleVis(true)
                        )
                        }

                        onMouseOut={e => (
                            e.currentTarget.src = head1,
                                setParticleVis(false)
                        )
                        }
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
                    <Cards/>
                </div>
            </div>
        </div>
    );
}

export default Home;