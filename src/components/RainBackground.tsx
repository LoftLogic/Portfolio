import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

interface Rain {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};

interface Cloud {
    id: number;
    size: number;
    top: number;
    duration: number;
}

export const RainBackround = () => {
    const [raindrops, setRaindrops] = useState<Rain[]>([]);
    // const [clouds, setClouds] = useState<Cloud[]>([])

    const { isDarkMode } = useTheme(); 

    useEffect(() => {
        generateRain();
        // generateClouds();

        const handleResize = () => {
            generateRain();
            // generateClouds();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateRain = () => {
        const numberOfRain: number = Math.floor(window.innerWidth * window.innerHeight / 50000);

        const newRain: Rain[] = [];

        for (let i=0; i < numberOfRain; i++) {
            const raindrop: Rain = {
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0.0,
                animationDuration: Math.random() * 3 + 2
            }
            newRain.push(raindrop);
        }

        setRaindrops(newRain);
    };

    // const generateClouds = () => {
    //     const numClouds = 4;
    //     const newClouds: Cloud[] = [];

    //     for (let i=0; i < numClouds; i++) {
    //         const newCloud: Cloud = {
    //             id: i,
    //             size: Math.random() * (350 - 250) + 250,
    //             top: Math.random() * (25 - 5) + 5,
    //             duration: Math.random() * (60 - 90) + 60 
    //         };
    //         newClouds.push(newCloud);
    //     }
    //     setClouds(newClouds);
    // }

    return !isDarkMode ? <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {raindrops.map((rain) => (
            <div key={rain.id} className="raindrop animate-rain" style={{
                width: rain.size + "px",
                height: (rain.size * 13) + "px", // Made it longer for a proper raindrop
                left: `${rain.x}%`,
                top: `${rain.y}%`,
                opacity: rain.opacity,
                animationDuration: `${rain.animationDuration}s`,
                animationDelay: `0s` // Stagger the animations
            }}/>
        ))} 
    </div> : <div></div>
};



