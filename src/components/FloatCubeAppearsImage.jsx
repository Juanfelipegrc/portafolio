import { useAnimationFrame } from 'motion/react';
import * as motion from 'motion/react-client'
import React, { useRef } from 'react';
import { useAnimations } from '../hooks/useAnimations';

export const FloatCubeAppearsImage = ({animateExit, hideCube}) => {
        const ref = useRef(null);
        const {lastPage, screenWidth} = useAnimations();
        

        useAnimationFrame((t) => {
            if (!ref.current) return;
            const rotate = t / 10;
            ref.current.style.transform = `rotateY(${rotate}deg)`;
            
        });
    
        const sideStyle = {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 1
        };

        console.log(screenWidth)
        
    
        return (
                <motion.div 
                    className={`perspective-[50rem] w-[15rem] h-[15rem] flex items-center justify-center absolute z-[3]`}
                    initial={lastPage && lastPage !== 'projects'? {x:1000, opacity: 0} : false}
                    animate={animateExit && !hideCube? {x: 1000, opacity: 0} : hideCube? {scale: 0} : {x:0, y:0, opacity: 1}}
                    transition={{duration: hideCube? 0.4 : 0.5, ease: 'easeInOut', delay: animateExit? 0 : !hideCube && lastPage !== 'projects'? 1 : 0.3}}
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
