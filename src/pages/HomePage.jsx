import React, { useEffect } from 'react'
import * as motion from 'motion/react-client'
import { useMotionValue, useSpring} from 'motion/react'
import { FloatCube, FloatCubeNormal } from '../components';
import { Noise } from '../assets';


export const HomePage = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 28 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 28 });



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
    
        <div 
            className='flex flex-col w-full h-screen items-center justify-center relative overflow-hidden bg-black'
        >

            <div 
                className='fixed z-[1] h-full w-full overflow-hidden'
                style={{
                    backgroundImage: `url(${Noise})`,
                    backgroundSize: '10rem',
                    backgroundRepeat: 'repeat',
                    opacity: 0.1
                }}
            >

            </div>

            <motion.div
                className="hidden sm:hidden md:hidden lg:inline-block fixed top-0 left-0 w-6 h-6 bg-neutral-700 rounded-full pointer-events-none mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    transform: "translate(-20%, -20%)",
                    zIndex: 999,
                }}
            />

            


                <FloatCubeNormal/>
            
                    <h1 
                        style={{fontFamily: 'Turret Road'}}
                        className='text-3xl md:text-6xl lg:text-7xl text-center text-white z-[2]'
                    >
                        HI DEAR, I'M REACT JS SOFTWARE DEVELOPER
                    </h1>

        
                <FloatCube/>
            
    

            

           

        </div>
    
    </>
  )
}
