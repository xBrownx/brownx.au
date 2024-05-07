import styles from '../home/home.module.css'

import {useEffect, useState} from "react";
import {Transition} from "react-transition-group";
import TopPanel from "../home/topPanel/TopPanel";
import BottomPanel from "../home/bottomPanel/BottomPanel";

function Home() {

    const [isOpen, toggleIsOpen] = useState(false);
    const duration = 1000;
    const [transitionFinished, setTransitionFinished] = useState(false);

    useEffect(() => {
        toggleIsOpen(true)
    }, [])

    return (

        <div className={styles.mainContainer}>
            <Transition in={isOpen} timeout={duration} addEndListener={(node, done) => {
                setTransitionFinished(true)
            }
            }>
                {state => (
                    <>
                        <TopPanel
                            className={styles.topPanelContainer}
                            duration={duration}
                            state={state}
                            transitionState={transitionFinished}
                        />
                        <BottomPanel
                            className={styles.bottomPanelContainer}
                            duration={duration}
                            state={state}
                            transitionState={transitionFinished}
                        />
                    </>
                )}
            </Transition>
        </div>
    )
}

export default Home;