// src/ParticlesComponent.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        // Load slim version of tsParticles engine
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles container loaded:", container);
    }, []);

    const options = {
        background: {
            color: "#000000",
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: "#FFFFFF",
            },
            links: {
                color: "#FFFFFF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2.5,
                outModes: "bounce",
                random: true,
            },
            number: {
                value: 150,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};

export default ParticlesComponent;
