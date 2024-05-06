import React from 'react';
import ph1 from '../assets/img/ph1.webp'
import ph2 from '../assets/img/ph2.jpg'
import ph3 from '../assets/img/ph3.jpg'
import ph4 from '../assets/img/ph6.jpg'
import ph5 from '../assets/img/ph5.webp'
import CardItem from "./CardItem";
import './Cards.css'

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
                        />
                        <CardItem
                            src={ph2}
                            text='Next'
                            label='Android/Kotlin'
                            path='/services'
                        />
                        <CardItem
                            src={ph3}
                            text="I'm a Bellend!"
                            label='Android/Java'
                            path='/services'
                        />
                        <CardItem
                            src={ph4}
                            text='This Website'
                            label='Python'
                            path='/services'
                        />
                        {/*<CardItem*/}
                        {/*    src={ph5}*/}
                        {/*    text='Your Website'*/}
                        {/*    label='Kotlin'*/}
                        {/*    path='/services'*/}
                        {/*/>*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
