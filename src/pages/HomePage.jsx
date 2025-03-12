import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useMotionValue, useSpring} from 'motion/react'
import { FloatCube, FloatCubeNormal } from '../components';
import { Noise, PrincipalProfilePicture } from '../assets';
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';


export const HomePage = () => {

    const [animateExit, setAnimateExit] = useState(false);
    const {lastPage, onSetLastPage} = useAnimations();

    const navigate = useNavigate();

    const onSetAnimateExit = (page) => {
        setAnimateExit(true);
        setTimeout(() => {
            navigate(`/${page}`)
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

        <div className='w-full flex flex-col items-center bg-black'>

            <div className='flex justify-center h-screen'>
                <div className='w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] grid grid-cols-12 pt-[7rem] md:pt-[15rem] lg:pt-[15rem]'>
                    <div className='col-span-12 flex justify-center md:justify-end lg:justify-end items-center md:items-start lg:items-start  md:col-span-5 lg:col-span-5 pe-0 md:pe-7 lg:pe-7'>
                        <img 
                            src={PrincipalProfilePicture} 
                            alt="Profile Picture" 
                            className='w-[18rem] h-[18rem] sm:w-[23rem] sm:h-[23rem] md:w-[15rem] md:h-[15rem] lg:w-[15rem] lg:h-[15rem] rounded-full'
                        />
                    </div>
                    <div className='col-span-12 md:col-span-7 lg:col-span-7 p-5'>
                        <h1 className='text-white text-center md:text-start lg:text-start font-semibold text-4xl md:text-3xl lg:text-3xl'>It's Juan Felipe</h1>
                        <p className='mt-5 text-[1.1rem] text-white text-center md:text-start lg:text-start'>
                            Hi I'm Juan Felipe García Rojas, i'm <b>FrontEnd</b> software developer expert using React JS, i know how to use HTML, CSS, Javascript, Bootstrap, Tailwind CSS, React Redux, React Router, Motion, Git, a bit of sass, a bit of TypeScript & React JS. <br /> <br />
                            
                            
                        </p>
                    </div>
                </div>
            </div>

        </div>


    
    </>
  )
}
