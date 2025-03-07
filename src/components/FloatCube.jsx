import { useAnimationFrame } from 'motion/react';
import * as motion from 'motion/react-client'
import React, { useRef } from 'react';

export const FloatCube = () => {
    const ref = useRef(null);
    
        useAnimationFrame((t) => {
            if (!ref.current) return;
    
            const rotate = Math.sin(t / 5000) * 100;
            const y = (1 + Math.sin(t / 800)) * -15; 
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
                    className='perspective-[50rem] w-[15rem] h-[15rem] flex items-center justify-center absolute z-[3] bottom-4 right-4'
                    drag
                    dragElastic={0.2}
                    dragConstraints={{left:0, right:0, top:0, bottom:0}}
                >
                    <div 
                        className='transform-3d w-[6.29rem] h-[6.29rem] relative'
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
