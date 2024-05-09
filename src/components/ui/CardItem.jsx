import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Cards.css'
import {motion} from "framer-motion"

function CardItem(props) {
    return (
        <motion.li
            className='cards__item'
            initial={{
                transform: "translateY(200%)"
            }}
            animate={{
                transform: "translateY(0)",
                transition: {
                    delay: props.delayEnter,
                    duration: 0.2
                }
            }}
            exit={{
                transform: "translateY(200%)",
                transition: {
                    delay: props.delayExit,
                    duration: 0.2
                }
            }}
        >
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                        className='cards__item__img'
                        alt={'Project Image'}
                        src={props.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </motion.li>

    );
}

export default CardItem;