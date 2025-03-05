import React, { useRef } from 'react'
import * as motion from 'motion/react-client'
import { AustronautLogo, HiAppLogo, PrincipalProfilePicture } from '../assets'
import { useAnimationFrame, useScroll, useTransform} from 'motion/react'

export const HomePage = () => {

    const {scrollY} = useScroll();

    const ref = useRef(null);

    useAnimationFrame((t) => {
        if (!ref.current) return;

        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    const sideStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        opacity: 0.6
    };


    const y = useTransform(scrollY, [0, 700], [1000, -2000]);


  return (
    <>
    
        <div className='flex flex-col w-full items-center relative overflow-hidden'>

        

            <div className='flex justify-center items-center h-screen w-full relative'>

                <div
                    className='perspective-[50rem] w-[30rem] h-[30rem] z-0 absolute top-[40%] left-[28%] sm:top-[40%] sm:left-[38%] md:left-[42%] lg:top-[45%] lg:left-[45%]'
                >
                    <div 
                        className='transform-3d w-[12.5rem] h-[12.5rem] relative'
                        ref={ref}
                        
                    >
                        <div style={{ ...sideStyle, transform: "rotateY(0deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                        <div style={{ ...sideStyle, transform: "rotateY(90deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                        <div style={{ ...sideStyle, transform: "rotateY(180deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                        <div style={{ ...sideStyle, transform: "rotateY(-90deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                        <div style={{ ...sideStyle, transform: "rotateX(90deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                        <div style={{ ...sideStyle, transform: "rotateX(-90deg) translateZ(6.3rem)", backgroundColor: "#000" }} />
                    </div>
                </div>
                

                
            </div>


            

           

        </div>
    
    </>
  )
}
