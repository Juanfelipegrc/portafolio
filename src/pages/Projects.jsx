import React from 'react'
import * as motion from 'motion/react-client'
import { AustronautLogo } from '../assets'

export const Projects = () => {
  return (
    <>
    
        <motion.div 
            className='w-full flex flex-col overflow-hidden z-[2]'
            initial={{x:1000, y: -1000}}
            animate={{x: 0, y: 0}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            

            <motion.h1
                className='text-6xl text-center p-9 text-white font-rubik-iso'
            >
                PROJECTS
            </motion.h1>

            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12 md:col-span-6 lg:col-span-7 px-8 order-2 md:order-1 lg:order-1 mt-6 md:mt-0 lg:mt-0'>
                    <h1 className='font-semibold text-white text-2xl text-center md:text-start lg:text-start font-orbitron'>AUSTRONAUT</h1>
                    <p className='text-white text-center md:text-start lg:text-start font-turret-road'>Austronaut is an advanced AI assistant, powered by LLaMA, designed to deliver intelligent answers, solve problems, and improve productivity. With an intuitive interface and cutting-edge natural language processing, Astronaut helps you explore the universe of knowledge quickly and efficiently.</p>
                </div>
                <motion.div 
                    className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-center items-center z-[2] order-1 md:order-2 lg:order-2'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut', delay: 1}}
                >
                        <img 
                            src={AustronautLogo} 
                            alt="Austrounaut Logo" 
                            className='w-[20rem]'
                            
                        />
                </motion.div>
            </div>
            

        </motion.div>
    
    </>
  )
}
