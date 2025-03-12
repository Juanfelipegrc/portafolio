import { useAnimationFrame } from 'motion/react';
import * as motion from 'motion/react-client';
import React, { useRef } from 'react';
import { useAnimations } from '../hooks/useAnimations';

export const FloatCube = () => {
  const ref = useRef(null);
  const { lastPage } = useAnimations();

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 6000) * 200;
    const y = (1 + Math.sin(t / 800)) * -1; // very light float movement
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const sideStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 1,
    border: '1px solid #000',
    backgroundColor: "#fff"
  };

  return (
    <motion.div
      className='perspective-[30rem] w-[6rem] h-[6rem] flex items-center justify-center z-[3]'
      initial={lastPage && lastPage !== 'home' ? { x: 1000, opacity: 0 } : false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
    >
      <div
        className='transform-3d w-[2.2rem] h-[2.2rem] relative'
        ref={ref}
      >
        <div style={{ ...sideStyle, transform: "rotateY(0deg) translateZ(1.1rem)" }} />
        <div style={{ ...sideStyle, transform: "rotateY(90deg) translateZ(1.1rem)" }} />
        <div style={{ ...sideStyle, transform: "rotateY(180deg) translateZ(1.1rem)" }} />
        <div style={{ ...sideStyle, transform: "rotateY(-90deg) translateZ(1.1rem)" }} />
        <div style={{ ...sideStyle, transform: "rotateX(90deg) translateZ(1.1rem)" }} />
        <div style={{ ...sideStyle, transform: "rotateX(-90deg) translateZ(1.1rem)" }} />
      </div>
    </motion.div>
  );
};
