import React, {useEffect, useState} from 'react';
import './Home.css'
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {ReactComponent as Icon} from '../assets/img/iconsvg.svg';

function Home() {

    const [logoHeight, setLogoHeight] = useState('100%');
    const [logoWidth, setLogoWidth] = useState('100%');

    const [textSize, setTextSize] = useState('25em');
    const [textVisible, setTextVisible] = useState(0);

    useEffect(() => {
        setLogoHeight('9vh')
        setLogoWidth('16vh')
        setTextVisible(1)
    }, [])
    return (
        <div className='main'>
            <div className="container">
                <div className="logo-container">
                    <Logo style={{
                        position: 'absolute',
                        height: logoHeight,
                        width: logoWidth,
                        transition: "all 2.0s",
                        transitionDelay: '2s'
                    }}/>
                </div>
            </div>


            <div className="navigation" style={{
                        position: 'flex',
                        justifyContent: 'flex-end',
                        alignContent: 'end',
                        width: '100%',
                        visibility: textVisible,
                        opacity: textVisible,
                        transition: "all 2.0s",
                        transitionDelay: '4s',
                        alignSelf: 'flex-end',
                        right: '0px',
                        flexDirection: "row",
                    }}>
                <p>Hello Cunt</p>
            </div>
        </div>
    );
}

export default Home;