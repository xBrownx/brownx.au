import React from 'react'
import {motion} from "framer-motion"


const TransformDiv = (props) => {
    return (
        <motion.div
            className={props.className}
            initial={{
                transform: props.initPosition
            }}
            animate={{
                transform: props.animPosition,
                transition: {
                    duration: props.animDuration,
                    delay: props.animDelay
                }
            }}
            exit={{
                transform: props.exitPosition,
                transition: {
                    duration: props.exitDuration,
                    delay: props.exitDelay
                }
            }}>
            {props.children}
        </motion.div>
    )
}

export default TransformDiv