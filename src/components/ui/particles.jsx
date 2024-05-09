import Particles, {initParticlesEngine} from "@tsparticles/react";
import React, {useEffect, useState} from "react";
import {loadFull} from "tsparticles";
import anomeConfig from "../config/anomeConfig";

const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (init) {
        return (<Particles
            id="tsparticles"
            options={anomeConfig(props)}
            className={props.className}
        />);
    }
    return <></>;
};

export default ParticlesComponent;