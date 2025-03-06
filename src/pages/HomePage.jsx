import React, { useEffect, useRef } from 'react'
import * as motion from 'motion/react-client'
import { AustronautLogo, HiAppLogo, PrincipalProfilePicture } from '../assets'
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform} from 'motion/react'


export const HomePage = () => {




    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 28 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 28 });


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
        opacity: 0.8
    };


    const y = useTransform(scrollY, [0, 700], [1000, -2000]);

    


    useEffect(() => {
        const updateCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, [mouseX, mouseY]);


  return (
    <>
    
        <div className='flex flex-col w-full items-center relative overflow-hidden'>

            <motion.div
                className="hidden sm:hidden md:hidden lg:inline-block fixed top-0 left-0 w-6 h-6 bg-neutral-700 rounded-full pointer-events-none mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    transform: "translate(-20%, -20%)",
                    zIndex: 999,
                }}
            />


        

            <div className='flex justify-center items-center h-screen w-full relative'>

                <div
                    className='perspective-[50rem] w-[30rem] h-[30rem] z-0 absolute top-[40%] left-[28%] sm:top-[40%] sm:left-[38%] md:left-[42%] lg:top-[45%] lg:left-[45%]'
                >
                    <div 
                        className='transform-3d w-[12.5rem] h-[12.5rem] relative'
                        ref={ref}
                        
                    >
                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateY(0deg) translateZ(6.3rem)", 
                            backgroundImage: "url(/react-logonormal.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat', 
                            backgroundColor: "#000" 
                        }}  />

                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateY(90deg) translateZ(6.3rem)", 
                            backgroundColor: "#000", 
                            backgroundImage: "url(/tailwind-css-logo.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat' 
                        }} />

                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateY(180deg) translateZ(6.3rem)",
                            backgroundColor: "#000", 
                            backgroundImage: "url(/bootstrap-logo.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat' 
                        }} />

                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateY(-90deg) translateZ(6.3rem)", 
                            backgroundColor: "#000",
                            backgroundImage: "url(/motion-logo.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat' 
                        }} />
                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateX(90deg) translateZ(6.3rem)", 
                            backgroundColor: "#000",
                            backgroundImage: "url(/redux-logo.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat' 
                        }} />
                        <div style={{ 
                            ...sideStyle, 
                            transform: "rotateX(-90deg) translateZ(6.3rem)", 
                            backgroundColor: "#000",
                            backgroundImage: "url(/react-router-logo.png)", 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat'
                        }} />
                    </div>
                </div>
                

                
            </div>

            


            <div className='bg-neutral-950 w-full'>

                <h2 className='font-semibold text-[2.7rem] my-4 text-center text-white'>SKILLS & ABILITIES</h2>

                <div className='flex justify-center items-center'>

                </div>

            </div>


            

           

        </div>
    
    </>
  )
}
