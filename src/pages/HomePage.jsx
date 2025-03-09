import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useMotionValue, useSpring} from 'motion/react'
import { FloatCube, FloatCubeNormal } from '../components';
import { Noise } from '../assets';
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';


export const HomePage = () => {

    
    const [aboutMeButtonHover, setAboutMeButtonHover] = useState(false);
    const [seeProjectsButtonHover, setSeeProjectsButtonHover] = useState(false);
    const [animateExit, setAnimateExit] = useState(false);
    const {lastPage, onSetLastPage} = useAnimations();

    const navigate = useNavigate();

    const onSetAnimateExit = (page) => {
        console.log(page)
        setAnimateExit(true);
        setTimeout(() => {
            navigate('/see-projects')
        }, 1000);     
    };

    useEffect(() => {
      
        if(lastPage === '') {
            onSetLastPage('home');
        } else{
            if(lastPage !== 'home'){
                onSetLastPage('home');
            }
        }

    }, [])
    

    

  return (
    <>
    
        <div 
            className='flex flex-col w-full min-h-screen items-center justify-center relative overflow-hidden bg-black'
            
        >


                <FloatCubeNormal animateExit={animateExit}/>
            
                    <motion.div
                        initial={lastPage && lastPage !== 'home' ? { x: -1000, y: 1000 } : false}
                        animate={animateExit ? { x: -1000, y: 1000 } : { x: 0, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut'}}
                    >
                        <h1 
                            className='text-[1.7rem] md:text-6xl lg:text-7xl text-center text-white z-[2] font-rubik-iso'
                        >
                            HI DEAR, I'M JUAN FELIPE <br/>
                            WHAT CAN I DO FOR YOU?
                        </h1>

                        <h4 
                            className='text-[0.8rem] lg:text-[0.9rem] text-white text-center font-light font-turret-road'
                        >
                            I'm <b className='font-bold'>React JS</b> software developer
                        </h4>

                        <div className='flex w-full justify-center items-center gap-12 lg:gap-10 mt-5'>
                            <motion.button 
                                onHoverStart={() => setSeeProjectsButtonHover(true)}
                                onHoverEnd={() => setSeeProjectsButtonHover(false)}
                                onClick={() => onSetAnimateExit('see-projects')}
                                className='bg-transparent text-white text-[1rem] lg:text-[1.2rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road p-2'
                            >
                                <div className='flex justify-center items-center'>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        height="1.4rem"
                                        className='mb-1' 
                                        viewBox="0 -960 960 960" 
                                        width="1.4rem" 
                                        fill="#fff"
                                    ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>
                                    &nbsp;
                                    See projects
                                </div>

                                <motion.hr 
                                    className='bg-white h-[0.2] transition-all'
                                    style={{width: seeProjectsButtonHover? '100%' : '0%'}}

                                />
                            </motion.button>
                            <motion.button 
                                onHoverStart={() =>setAboutMeButtonHover(true)}
                                onHoverEnd={() => setAboutMeButtonHover(false)}
                                onClick={() => onSetAnimateExit('about-me')}
                                className='bg-tr ansparent text-white text-[1rem] lg:text-[1.2rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road p-2'
                            >
                                <div className='flex items-center justify-center'>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        height="1.45rem"
                                        className='mb-1' 
                                        viewBox="0 -960 960 960" 
                                        width="1.45rem" 
                                        fill="#fff"
                                    ><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                                    &nbsp;
                                    About me
                                </div>
                                <motion.hr 
                                    className='bg-white h-[0.2] transition-all'
                                    style={{width: aboutMeButtonHover? '100%' : '0%'}}

                                />
                            </motion.button>
                        </div>
                    </motion.div>

        
                <FloatCube animateExit={animateExit}/>
            
    

            

           

        </div>
    
    </>
  )
}
