import React from 'react'
import {motion} from "framer-motion"


const FadeDiv = (props) => {
    return (
        <motion.div
            className={props.className}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: props.animDuration,
                    delay: props.animDelay
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: props.exitDuration,
                    delay: props.exitDelay
                }
            }}>
            {props.children}
        </motion.div>
    )
}

export default FadeDiv