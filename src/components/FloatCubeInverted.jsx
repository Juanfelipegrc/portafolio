import { useAnimationFrame } from 'motion/react';
import React, { useRef } from 'react';

export const FloatCubeInverted = () => {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        if (!ref.current) return;

        const rotate = Math.sin(t / 5000) * 100;
        const y = (1 + Math.sin(t / 800)) * -15;


        ref.current.style.transform = `translateY(${y}px) rotateX(${-rotate}deg) rotateY(${-rotate}deg)`;
    });

    const sideStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.8
    };

    return (
            <div className='perspective-[50rem] w-[15rem] h-[15rem] z-0 flex items-center justify-center'>
                <div 
                    className='transform-3d w-[6.25rem] h-[6.25rem] relative'
                    ref={ref}
                >
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(0deg) translateZ(3.15rem)", 
                        backgroundColor: "#000" 
                    }}  />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(90deg) translateZ(3.15rem)", 
                        backgroundColor: "#000", 
                    }} />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(180deg) translateZ(3.15rem)",
                        backgroundColor: "#000", 
                    }} />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(-90deg) translateZ(3.15rem)", 
                        backgroundColor: "#000",
                    }} />
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateX(90deg) translateZ(3.15rem)", 
                        backgroundColor: "#000",
                    }} />
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateX(-90deg) translateZ(3.15rem)", 
                        backgroundColor: "#000",
                    }} />
                </div>
            </div>
    );
};
