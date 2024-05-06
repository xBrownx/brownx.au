import Particles, {initParticlesEngine} from "@tsparticles/react";
import React, {useCallback, useEffect, useState} from "react";
import {loadFull} from "tsparticles";
import {curvesPathName} from "@tsparticles/path-curves";
import anomeConfig from "./anomeConfig";

const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    if (init) {
        return (<Particles
            id="tsparticles"
            options = {anomeConfig(props)}
            // options={{
            //     autoPlay: true,
            //     background: {
            //         color: {
            //             value: "#000"
            //         },
            //         image: "",
            //         position: "relative",
            //         repeat: "",
            //         size: "100",
            //         opacity: 0.5,
            //     },
            //     backgroundMask: {
            //         composite: "destination-out",
            //         cover: {
            //             color: {
            //                 value: "#fff"
            //             },
            //             opacity: 1
            //         },
            //         enable: false
            //     },
            //     clear: true,
            //     defaultThemes: {},
            //     delay: 0,
            //     fullScreen: {
            //         enable: false,
            //         zIndex: 0
            //     },
            //     duration: 0,
            //     fpsLimit: 120,
            //     manualParticles: [],
            //     particles: {
            //         color: {
            //             value: "#FF0000",
            //         },
            //         move: {
            //             direction: "none",
            //             enable: true,
            //             outModes: {
            //                 default: "destroy",
            //             },
            //             path: {
            //                 clamp: false,
            //                 enable: true,
            //                 delay: {
            //                     value: 0.3,
            //                 },
            //                 generator: curvesPathName,
            //             },
            //             random: false,
            //             speed: 2,
            //             straight: false,
            //             trail: {
            //                 fill: {
            //                     color: "#000",
            //                 },
            //                 length: 30,
            //                 enable: true,
            //             },
            //         },
            //         number: {
            //             value: 0,
            //             limit: {
            //                 value: 300
            //             },
            //         },
            //         opacity: {
            //             value: 1,
            //         },
            //         shape: {
            //             type: "circle",
            //         },
            //         size: {
            //             value: {
            //                 min: 1,
            //                 max: 10
            //             },
            //             animation: {
            //                 count: 1,
            //                 startValue: "min",
            //                 enable: true,
            //                 speed: 10,
            //                 sync: true,
            //             },
            //         },
            //     },
            //
            //     emitters: {
            //         direction: "none",
            //         rate: {
            //             quantity: 10,
            //             delay: 0,
            //         },
            //         size: {
            //             width: 0,
            //             height: 0,
            //             mode: "precise",
            //         },
            //         spawnColor: {
            //             value: "#ff0000",
            //             animation: {
            //                 h: {
            //                     enable: true,
            //                     offset: {
            //                         min: -1.4,
            //                         max: 1.4,
            //                     },
            //                     speed: 5,
            //                     sync: false,
            //                 },
            //                 l: {
            //                     enable: true,
            //                     offset: {
            //                         min: 20,
            //                         max: 80,
            //                     },
            //                     speed: 0,
            //                     sync: false,
            //                 },
            //             },
            //         }, position: {
            //             x: 50,
            //             y: 50,
            //         },
            //     },
            // }}
            particlesLoaded={particlesLoaded}
        />);
    }
    return <></>;
};

export default ParticlesComponent;