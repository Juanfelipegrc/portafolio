import { useAnimationFrame } from 'motion/react';
import * as motion from 'motion/react-client';
import React, { useRef } from 'react';

export const FloatCubeNormal = () => {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        if (!ref.current) return;

        // 🔄 Invertimos los movimientos del cubo
        const rotate = -Math.sin(t / 5000) * 100; // Rotación inversa
        const y = (1 - Math.sin(t / 800)) * 15; // Movimiento de flotación invertido

        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    const sideStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 1
    };

    return (
            <motion.div 
                className='perspective-[50rem] w-[15rem] h-[15rem] flex items-center absolute z-[3] justify-center top-4 left-4'
                drag
                dragElastic={0.3}
                dragConstraints={{left:0, right:0, top:0, bottom:0}}
            >
                <div 
                    className='transform-3d w-[6.285rem] h-[6.285rem] relative'
                    ref={ref}
                >
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(0deg) translateZ(3.15rem)", 
                        backgroundColor: "#fff", 
                        border: '2px solid #000'
                    }}  />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(90deg) translateZ(3.15rem)", 
                        backgroundColor: "#fff",
                        border: '2px solid #000' 
                    }} />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(180deg) translateZ(3.15rem)",
                        backgroundColor: "#fff",
                        border: '2px solid #000' 
                    }} />

                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateY(-90deg) translateZ(3.15rem)", 
                        backgroundColor: "#fff",
                        border: '2px solid #000'
                    }} />
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateX(90deg) translateZ(3.15rem)", 
                        backgroundColor: "#fff",
                        border: '2px solid #000'
                    }} />
                    <div style={{ 
                        ...sideStyle, 
                        transform: "rotateX(-90deg) translateZ(3.15rem)", 
                        backgroundColor: "#fff",
                        border: '2px solid #000'
                    }} />
                </div>
            </motion.div>
    );
};
