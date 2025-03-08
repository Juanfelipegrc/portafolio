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
                style={{fontFamily: 'Rubik Iso'}}
                className='text-6xl text-center p-9 text-white'
            >
                PROJECTS
            </motion.h1>

            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-6 lg:col-span-7 px-8 order-2 md:order-1 lg:order-1 mt-6 md:mt-0 lg:mt-0'>
                    <h1 className='font-semibold text-white text-2xl text-center md:text-start lg:text-start'>AUSTRONAUT</h1>
                    <p style={{fontFamily: 'Turret Road'}} className='text-white text-center md:text-start lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum veritatis officia cum! Iusto, voluptas iste vel id, beatae et quidem error iure nesciunt fuga quasi accusamus facilis cumque? Eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sit molestias asperiores ipsa officia eum id, harum corporis pariatur, rem ullam aut repellat. Eum ipsa, non beatae ab nesciunt quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero distinctio aut velit culpa enim amet blanditiis cum rem, soluta vitae. Architecto sint dolor consequatur animi aperiam neque velit autem.</p>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-center items-center z-[2] order-1 md:order-2 lg:order-2'>
                    <div className='bg-white h-[30rem] rounded-4xl w-[70%] flex justify-center items-center'>
                        <img 
                            src={AustronautLogo} 
                            alt="Austrounaut Logo" 
                            className='w-36'
                            
                        />
                    </div>
                </div>
            </div>

        </motion.div>
    
    </>
  )
}
