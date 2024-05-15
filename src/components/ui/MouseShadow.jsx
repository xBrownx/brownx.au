import React, {useEffect, useState} from 'react';

const useMouseShadow = () => {

    const walk = 10;

    const [
        mouseShadow,
        setMouseShadow
    ] = useState({x: null, y: null});

    useEffect(() => {

        const app = document.querySelector('.App')

        const shadow = function (e) {
            const width = this.offsetWidth;
            const height = this.offsetHeight;

            let x = e.offsetX
            let y = e.offsetY

            if (this !== e.target) {
                x = x + e.target.offsetLeft;
                y = y + e.target.offsetTop;
            }

            const xWalk = Math.round((x / width * walk) - (walk / 2))
            const yWalk = Math.round((y / height * walk) - (walk / 2))

            setMouseShadow({
                x: xWalk,
                y: yWalk
            })
        }

        app.addEventListener('mousemove', shadow)
    }, []);

    return mouseShadow;
}

export default useMouseShadow;