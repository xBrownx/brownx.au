import {curvesPathName} from "@tsparticles/path-curves";

const anomeConfig = (props) => {
    return {
        autoPlay: props.onPlay,
        background: {
            color: {
                value: "#EEE"
            },
            position: 'center',
            size: '1000px 1000px',
            opacity: 0.1
        },
        clear: true,
        fpsLimit: 120,
        particles: {
            color: {
                value: "#FF0000",
            },
            move: {
                direction: "end top",
                enable: true,
                outModes: {
                    default: "destroy",
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
                speed: 4,
                straight: false,
                trail: {
                    fill: {
                        color: "#FFF",
                    },
                    length: 10,
                    enable: true,
                },
            },
            number: {
                value: 0,
                limit: {value: 500},
            },
            opacity: {
                value: 0.9,
            },
            shape: {
                type: "square",
            },
            size: {
                value: {min: 9, max: 10},
                animation: {
                    count: 1,
                    startValue: "min",
                    enable: true,
                    speed: 20,
                    sync: true,
                },
            },
        },
        fullScreen: {
            enable: false,
            zIndex: -1
        },
        emitters: {
            autoPlay: props.onPlay,
            direction: "top start",
            rate: {
                quantity: 15,
                delay: 0.3,
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
                        speed: 10,
                        sync: false,
                    },
                    l: {
                        enable: true,
                        offset: {
                            min: 20,
                            max: 200,
                        },
                        speed: 10,
                        sync: false,
                    },
                },
            },
            position: {
                x: 50,
                y: 40,
            },
        },
    }
}

export default anomeConfig