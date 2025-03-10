import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';
import { FloatCubeAppearsImage } from '../components';
import { projects } from '../data';

export const Projects = () => {


    const [animateExit, setAnimateExit] = useState(false);
    const [hideCube, setHideCube] = useState(false);
    const [actualProject, setActualProject] = useState(0);
    const {lastPage, screenWidth, onSetLastPage} = useAnimations();
    const navigate = useNavigate();

    


    // FUNCTIONS

    const onSetAnimateExit = () => {
        setAnimateExit(true);

        setTimeout(() => {
            navigate('/')
        }, 1100);
    };


    const onChangeProject = (value) => {
        if(value === 'next'){
            if(actualProject === projects.length - 1) return;
            setActualProject(actualProject + 1);
        } else if(value === 'prev'){
            if(actualProject === 0) return;
            setActualProject(actualProject - 1)
        }
        
    }








    // USEEFFECTS

    useEffect(() => {
          
            if(lastPage === '') {
                onSetLastPage('projects');
                setTimeout(() => {
                    setHideCube(true);
                }, 700);

            } else{
                if(lastPage !== 'projects'){
                    onSetLastPage('projects');
                    setTimeout(() => {
                        setHideCube(true);
                    }, 2500);
                }
            }

           
    
    
        }, []);

        useEffect(() => {

            if(lastPage !== 'projects') return;

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
          
            setHideCube(false);

            setTimeout(() => {
                setHideCube(true);
            }, 3000);

        }, [actualProject]);




        

  return (
    <>
    
        <motion.div 
            className={`w-full flex flex-col ${screenWidth < 768? 'items-center' : ''} overflow-hidden z-[2] relative`}
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
                    <h1 className='font-semibold text-white text-2xl text-center md:text-start lg:text-start font-orbitron'>{projects[actualProject].name.toUpperCase()}</h1>
                    <p className='text-white text-center md:text-start lg:text-start font-turret-road'>{projects[actualProject].desc}</p>
                </div>
                <div 
                    className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-center items-center z-[2] order-1 md:order-2 lg:order-2 h-[20rem]'
                >
                    <FloatCubeAppearsImage 
                        animateExit={animateExit} 
                        hideCube={hideCube}
                    />
                    
                        <motion.img 
                            src={projects[actualProject].logo} 
                            alt="Austrounaut Logo" 
                            initial={{scale: 0}}
                            animate={hideCube? {scale:1} : {scale: 0}}
                            transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}
                            className={`w-[17rem] ${!hideCube? 'hidden' : ''}`}
                            
                        />
                        
                </div>
            </div>

            <div className='w-full flex justify-center items-center z-[3]'>
                <div className='grid grid-cols-12 justify-center my-4 w-full'>

                    <div className='col-span-6 flex justify-center'>
                        <button 
                            className='border-b-2 border-white bg-transparent text-white font-medium p-6 w-[90%] cursor-none'
                            onClick={() => onChangeProject('prev')}
                        >
                            Prev project
                        </button>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <button 
                            className='border-b-2 border-white bg-transparent text-white font-medium p-6 w-[90%] cursor-none'
                            onClick={() => onChangeProject('next')}
                        >
                            Next project
                        </button>
                    </div>

                </div>
            </div>
            

        </motion.div>
    
    </>
  )
}
