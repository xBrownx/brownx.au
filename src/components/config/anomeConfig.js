import {curvesPathName} from "@tsparticles/path-curves";


const anomeConfig = (props) => {
    return {
        autoPlay: true,
        background: {
            color: "transparent",
            position: "center",
            size: "auto auto"
        },
        clear: false,
        fpsLimit: 120,
        particles: {
            color: {
                value: "#FF0000",
            },
            move: {
                angle: {
                    offset: 0,
                    value: 180
                },
                // center: {
                //     x: 50,
                //     y: 50,
                //     mode: "percent",
                //     radius: 0
                // },
                // decay: {
                //     min: 0.0001,
                //     max: 0.0005
                // },
                direction: "top",
                enable: true,
                outModes: {
                    default: "destroy",
                },
                gravity: {
                    acceleration: 5,
                    enable: true,
                    inverse: false,
                    maxSpeed: 200
                },
                path: {
                    clamp: true,
                    enable: true,
                    delay: {
                        value: 0,
                    },
                    generator: curvesPathName,
                },
                random: false,
                size: false,
                speed: {
                    min: 4, max: 15
                },
                spin: {
                    acceleration: 0,
                    enable: false
                },
                straight: false,
                trail: {
                    fill: {
                        color: "#FFF",
                    },
                    length: 2,
                    enable: true,
                },
                vibrate: false,
                warp: true
            },
            number: {
                density: {
                    enable: false,
                    width: 1920,
                    height: 1080
                },
                limit: {
                    mode: "delete",
                    value: 500
                },
                value: 0,
            },
            opacity: {
                value: 0.9,
            },
            shape: {
                close: true,
                fill: true,
                options: {
                    polygon: [{
                        "sides": 5
                    }, {
                        "sides": 6
                    }],
                    "character": [
                        {value: "<a/>"},
                        {value: "<br/>"},
                        {value: "cunt"},
                        {value: "int"},
                        {value: "func"},
                        {value: "def"},
                        {value: "brownx"}
                    ],
                },
                type: ["character"]
            },
            size: {
                value: {min: 8, max: 10},
                animation: {
                    count: 1,
                    startValue: "min",
                    enable: true,
                    speed: 60,
                    sync: false,
                },
            },
            // "roll": {
            //     "darken": {
            //         "enable": true,
            //         "value": 30
            //     },
            //     "enable": true,
            //     "enlighten": {
            //         "enable": true,
            //         "value": 30
            //     },
            //     "mode": "both",
            //     "speed": {
            //         "min": 5,
            //         "max": 15
            //     }
            // },
            // "tilt": {
            //     "value": {
            //         "min": 0,
            //         "max": 360
            //     },
            //     "animation": {
            //         "enable": true,
            //         "speed": 60,
            //         "decay": 0,
            //         "sync": false
            //     },
            //     "direction": "random",
            //     "enable": true
            // },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                }
            },
            "wobble": {
                "distance": 30,
                "enable": true,
                "speed": {
                    "angle": {
                        "min": -15,
                        "max": 15
                    },
                    "move": 10
                }
            },
            "life": {
                "count": 10,
                "delay": {
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "value": 0,
                    "sync": false
                }
            },
            "rotate": {
                "value": {
                    "min": 0,
                    "max": 360
                },
                "animation": {
                    "enable": true,
                    "speed": {
                        "min": 30, "max": 60
                    },
                    "decay": 0,
                    "sync": false
                },
                "direction": "random",
                "path": false
            },
            "orbit": {
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": false
                },
                "enable": true,
                "opacity": 1,
                "rotation": {
                    "value": 45
                },
                "width": 1
            },
            // "links": {
            //     "blink": true,
            //     "color": {
            //         "value": "#fff"
            //     },
            //     "consent": false,
            //     "distance": 100,
            //     "enable": true,
            //     "frequency": 1,
            //     "opacity": 1,
            //     "shadow": {
            //         "blur": 5,
            //         "color": {
            //             "value": "#000"
            //         },
            //         "enable": false
            //     },
            //     "triangles": {
            //         "enable": true,
            //         "frequency": 1
            //     }, "width": 1,
            //     "warp": true
            // },
            // "repulse": {
            //     "value": 0,
            //     "enabled": false,
            //     "distance": 1,
            //     "duration": 1,
            //     "factor": 1,
            //     "speed": 1
            // }

        },
        fullScreen: {
            enable: false,
            zIndex: 0
        },
        emitters: {
            autoPlay: props.onPlay,
            direction: "top",
            rate: {
                quantity: 5,
                delay: 0.1,
            },
            size: {
                width: 0,
                height: 0,
                mode: "precise",
            },
            spawnColor: {
                value: "#ff0000",
                animation: {
                    h: {
                        enable: true,
                        offset: {
                            min: -1.4,
                            max: 1.4,
                        },
                        speed: 100,
                        sync: false,
                    },
                    l: {
                        enable: true,
                        offset: {
                            min: 20,
                            max: 200,
                        },
                        speed: 100,
                        sync: false,
                    },
                },
            },
            position: {
                x: 50,
                y: 44,
            },
        },
    }
}

export default anomeConfig