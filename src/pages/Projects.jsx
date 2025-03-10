import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { AustronautLogo } from '../assets'
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';
import { FloatCubeAppearsImage } from '../components';

export const Projects = () => {


    const [animateExit, setAnimateExit] = useState(false);
    const [hideCube, setHideCube] = useState(false);

    const {lastPage, onSetLastPage} = useAnimations();

    const navigate = useNavigate();

    const onSetAnimateExit = () => {
        setAnimateExit(true);

        setTimeout(() => {
            navigate('/')
        }, 1100);
    }

    useEffect(() => {
          
            if(lastPage === '') {
                onSetLastPage('projects');
                setTimeout(() => {
                    setHideCube(true);
                }, 1000);

            } else{
                if(lastPage !== 'projects'){
                    onSetLastPage('projects');
                    setTimeout(() => {
                        setHideCube(true);
                    }, 2500);
                }
            }

           
    
    
        }, [])

  return (
    <>
    
        <motion.div 
            className='w-full flex flex-col overflow-hidden z-[2]'
            initial={lastPage && lastPage !== 'projects'?{x:1000, y: -1000} : false}
            animate={animateExit?{x:1000, y:-1000} : {x: 0, y: 0}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            

            <div className='w-full flex items-center justify-center relative'>
                <div 
                    className='absolute left-2 md:left-8 lg:left-8 z-10 p-3'
                    onClick={onSetAnimateExit}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#fff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                </div>

                <motion.h1
                className='text-[3.20rem] text-center p-9 text-white font-rubik-iso'
                >
                    PROJECTS
                </motion.h1>
            </div>

            

            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12 md:col-span-6 lg:col-span-7 px-8 order-2 md:order-1 lg:order-1 mt-6 md:mt-0 lg:mt-0'>
                    <h1 className='font-semibold text-white text-2xl text-center md:text-start lg:text-start font-orbitron'>AUSTRONAUT</h1>
                    <p className='text-white text-center md:text-start lg:text-start font-turret-road'>Austronaut is an advanced AI assistant, powered by LLaMA, designed to provide accurate answers, solve problems, and optimize productivity in a variety of fields.

                    With its state-of-the-art natural language processing, Astronaut can fluently understand and generate text, offering assistance in tasks such as programming, writing, learning, and more.

                    Its intuitive interface and enhanced conversational experience make it an ideal tool for developers, students, and professionals looking for a quick and efficient solution to their queries.

                    Explore the universe of knowledge with Astronaut and take your productivity to the next level.</p>
                </div>
                <div 
                    className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-center items-center z-[2] order-1 md:order-2 lg:order-2'
                >

                        <FloatCubeAppearsImage animateExit={animateExit} hideCube={hideCube}/>
                        <motion.img 
                            src={AustronautLogo} 
                            alt="Austrounaut Logo" 
                            initial={{scale: 0}}
                            animate={hideCube?{scale:1} : false}
                            transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}
                            className='w-[17rem]'
                            
                        />
                </div>
            </div>
            

        </motion.div>
    
    </>
  )
}
