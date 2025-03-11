import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useNavigate } from 'react-router';
import { PrincipalProfilePicture } from '../assets';
import { useAnimations } from '../hooks/useAnimations';

export const AboutMe = () => {


  const [animateExit, setAnimateExit] = useState(false);
  const {lastPage, onSetLastPage} = useAnimations();
  const navigate = useNavigate();


  const onSetAnimateExit = () => {
    setAnimateExit(true);

    setTimeout(() => {
        navigate('/')
    }, 1100);
  };

  useEffect(() => {
            
        if(lastPage === '') {
            onSetLastPage('about-me');
            

        } else{
            if(lastPage !== 'about-me'){
                onSetLastPage('about-me');
                
            }
        }

          


      }, []);


  return (
    <>
    
        <motion.div 
          className="flex w-full min-h-screen flex-col"
          initial={{x:1000, y:-1000}}
          animate={animateExit? {x:1000, y:-1000} : {x:0, y:0}}
          transition={{duration: 1, ease: 'easeInOut'}}
        >

        

            <div className='w-full flex items-center justify-center relative'>
                <div 
                    className='absolute left-2 md:left-8 lg:left-8 z-10 p-3'
                    onClick={onSetAnimateExit}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#fff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                </div>

                <h1
                    className='text-[3.20rem] text-center p-9 text-white font-rubik-iso'
                >
                    ABOUT ME
                </h1>
            </div>


            <div className='w-full flex flex-col items-center z-10'>
              <div className="grid grid-cols-12 w-full md:w-[80%] lg:w-[80%]">
                <div className="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center md:justify-end lg:justify-end pe-0 md:pe-5 lg:pe-5">
                  <img 
                    src={PrincipalProfilePicture} 
                    alt="Profile Picture" 
                    className='w-[20rem] h-[20rem] rounded-full'
                  />
                </div> 
                <div className='col-span-12 md:col-span-8 lg:col-span-8 p-4 md:p-7 lg:p-9'>
                  <h1 className='font-semibold text-white text-3xl md:text-5xl lg:text-5xl text-center md:text-start lg:text-start'>Juan Felipe García Rojas</h1>
                  <p className='mt-5 text-white text-center md:text-start lg:text-start'>
                    Hi I'm Juan Felipe García Rojas, i'm <b>FrontEnd</b> software developer expert using React JS, i know how to use HTML, CSS Javascript, Bootstrap, Tailwind CSS, React Redux, React Router, Motion, Git, a bit of sass, a bit of TypeScript & React JS. <br /> <br />
                    
                    I'm from Colombia i love programing, i don't have previus experience working i'm new but i have a few projects made by me for my portafolio so you can take a look them in the projects page, i think i'm a great software developer because i made projects with a lot of logic and a lot of code lines, projects big, i'm looking foward to start working then it would be incredible work with you.
                  </p>
                </div>
              </div>
            </div>
            
        </motion.div>
    
    </>
  )
}
