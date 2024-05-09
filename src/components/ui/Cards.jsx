import React from 'react';
import ph1 from '../../assets/img/ph1.webp'
import ph2 from '../../assets/img/ph2.jpg'
import ph3 from '../../assets/img/ph3.jpg'
import ph4 from '../../assets/img/ph6.jpg'
import ph5 from '../../assets/img/ph5.webp'
import CardItem from "./CardItem";
import '../../styles/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={ph1}
                            text='Eagle Eye Safety'
                            label='React.js'
                            path='/services'
                            delayEnter={0.2}
                            delayExit={0}
                        />
                        <CardItem
                            src={ph2}
                            text="You're a Bellend"
                            label='Android/Kotlin'
                            path='/services'
                            delayEnter={0.3}
                            delayExit={0.1}
                        />
                        <CardItem
                            src={ph3}
                            text="I'm a Bellend!"
                            label='Android/Java'
                            path='/services'
                            delayEnter={0.4}
                            delayExit={0.2}
                        />
                        <CardItem
                            src={ph4}
                            text='This Website'
                            label='Python'
                            path='/services'
                            delayEnter={0.5}
                            delayExit={0.3}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
