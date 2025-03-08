import { useMotionValue, useSpring } from 'motion/react';
import * as motion from 'motion/react-client'
import React, { useEffect, useState } from 'react'

export const Cursor = ({cursorSize}) => {

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
  )
}
