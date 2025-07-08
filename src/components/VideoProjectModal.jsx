import React from 'react'
import * as motion from 'motion/react-client'
import { AnimatePresence } from 'motion/react'

export const VideoProjectModal = ({video, modalIsOpen, onSetModalVideoIsOpen}) => {
  

    return (
        <AnimatePresence>
            {
                modalIsOpen && (
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4, ease: 'easeInOut'}}
                    className='fixed top-0 left-0 h-screen w-screen z-[9999] bg-black/95 flex justify-center items-center overflow-y-auto overflow-x-hidden'>
                        <div className='w-full h-full relative flex justify-center items-center'>
                            <div  
                                className='absolute left-6 top-5 p-1'
                                onClick={() => onSetModalVideoIsOpen()}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1.8rem" 
                                    viewBox="0 -960 960 960" 
                                    width="1.8rem"
                                    fill="#fff">
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg>
                            </div>
                            <video 
                                src={video}
                                className='h-[80%]'
                                controls
                            >

                            </video>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
