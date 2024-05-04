import React, {useEffect, useState} from 'react';
import './Home.css'
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {ReactComponent as Icon} from '../assets/img/iconsvg.svg';

function Home() {

    const [scale, setScale] = useState('50%');
    useEffect(() => {
        setScale('300')
    }, [])
    return (
        <div className='main'>
            <div className="container">

                    <Icon style={{
                        height:scale,
                        width:scale,
                        transition: "all 2.0s",
                        transitionDelay: '2s'
                    }}/>
                    <Logo style={{
                        height:scale,
                        width:scale,
                        transition: "all 2.0s",
                        transitionDelay: '2s'
                    }}/>
                </div>

                <div className="navigation">
                    {/*<h1>HELLO</h1>*/}
                    {/*<p>Hello Cunt</p>*/}
                </div>
        </div>
    );
}

export default Home;