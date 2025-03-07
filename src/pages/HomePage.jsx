import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useMotionValue, useSpring} from 'motion/react'
import { FloatCube, FloatCubeNormal } from '../components';
import { Noise } from '../assets';


export const HomePage = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 28 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 28 });

    const [cursorSize, setCursorSize] = useState(1);

    useEffect(() => {
        const updateCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, [mouseX, mouseY]);



    const handleClick = () => {
        setCursorSize(1.7); 

        setTimeout(() => {
            setCursorSize(1); 
        }, 200);
    };
    





  return (
    <>
    
        <div 
            className='flex flex-col w-full min-h-screen items-center justify-center relative overflow-hidden bg-black'
            onMouseDown={handleClick}
        >

            <div 
                className='fixed z-[1] h-full w-full inset-0'
                style={{
                    backgroundImage: `url(${Noise})`,
                    backgroundSize: '10rem',
                    backgroundRepeat: 'repeat',
                    opacity: 0.1
                }}
            >

            </div>

            <motion.div
                className="hidden sm:hidden md:hidden lg:flex fixed top-0 left-0 w-6 h-6 bg-transparent border-2 border-white rounded-full pointer-events-none mix-blend-difference justify-center items-center"
                style={{
                    x: smoothX,
                    y: smoothY,
                    transition: 'scale 0.2s ease-out',
                    transform: "translate(-50%, -50%)",
                    zIndex: 999,
                }}
                animate={{scale: cursorSize}}
                transition={{duration: 0.2, ease: 'easeOut'}}
            >
                <div className='text-white text-[1.8rem] mb-[1.2rem] flex justify-center items-center'>
                    .
                </div>
            </motion.div>

            


                <FloatCubeNormal/>
            
                    <h1 
                        style={{fontFamily: 'Rubik Iso'}}
                        className='text-[1.7rem] md:text-6xl lg:text-7xl text-center text-white z-[2]'
                    >
                        HI DEAR, I'M JUAN FELIPE <br/>
                        WHAT CAN I DO FOR YOU?
                    </h1>

                    <div className='flex justify-center items-center gap-10 mt-5'>
                        <button style={{fontFamily: 'Turret Road'}} className='bg-transparent text-white text-[1rem] lg:text-[1.2rem] font-medium'>
                            See projects
                        </button>
                        <button style={{fontFamily: 'Turret Road'}} className='bg-transparent text-white text-[1rem] lg:text-[1.2rem] font-medium'>
                            See projects
                        </button>
                    </div>

        
                <FloatCube/>
            
    

            

           

        </div>
    
    </>
  )
}
