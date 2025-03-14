import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { AustronautLogo, DishoLogo, HiAppLogo, PrincipalProfilePicture } from '../assets';
import { Link, useNavigate } from 'react-router';
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

            <div className='flex items-center justify-center h-[130vh] sm:h-[130vh] md:h-screen lg:h-screen'>
                <div className='w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] grid grid-cols-12'>


                    <div className='col-span-12 flex justify-center md:justify-end lg:justify-end items-center md:items-start lg:items-center md:col-span-5 lg:col-span-5 pe-0 md:pe-7 lg:pe-7 md:pt-3 lg:pt-0'>
                        <img 
                            src={PrincipalProfilePicture} 
                            alt="Profile Picture" 
                            className='w-[18rem] h-[18rem] sm:w-[23rem] sm:h-[23rem] md:w-[15rem] md:h-[15rem] lg:w-[16rem] lg:h-[16rem] rounded-full'
                        />
                    </div>




                    <div className='col-span-12 md:col-span-7 lg:col-span-7 px-5 pt-5 flex flex-col justify-center'>
                        <h1 className='text-white text-center md:text-start lg:text-start font-semibold text-4xl md:text-3xl lg:text-5xl'>
                            Hello I'm <br /> 
                            <span className='text-blue-300'>Juan Felipe</span>
                        </h1>
                        <p className='mt-5 text-[1.1rem] text-white text-center md:text-start lg:text-start'>
                            Hi I'm Juan Felipe García Rojas, i'm <b className='text-blue-300'>FrontEnd</b> software developer expert using React JS, i know how to use HTML, CSS, Javascript, Bootstrap, Tailwind CSS, React Redux, React Router, Motion, Git, a bit of sass, a bit of TypeScript & React JS. <br /> <br />
                            
                            
                        </p>
                    </div>




                    <div className='col-span-12 flex items-center justify-center mt-3.5'>
                        <button className='bg-blue-400 flex items-center justify-center px-3 py-2 rounded-full cursor-none'>
                            <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1.2rem"
                                    className='mt-[2px]'
                                    viewBox="0 -960 960 960" 
                                    width="1.2rem" 
                                    fill="#fff"
                                ><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/></svg>

                                &nbsp;
                                <span className='text-white text-[1.1rem] font-light'>Read More</span>
                        </button>
                    </div>
                </div>
            </div>


            <div id='projects' className=' w-full md:p-4 lg:p-8 flex flex-col justify-center items-center'>

                <div className='w-[60%]'>
                    <h2 className='text-center text-white text-4xl font-medium'>Some <span className='text-blue-300'>Projects</span></h2>
                </div>


                <div className='grid grid-cols-12 gap-6 p-8'>
                    <motion.div
                        initial={{scale: 0, y: 50}}
                        animate={{scale: 1, y: 0}}
                        transition={{duration: 0.6, ease: 'easeIn'}}
                        viewport={{once: true}}
                        className='bg-neutral-900 rounded-4xl p-6 col-span-12 md:col-span-4 lg:col-span-4 hover:scale-105 transition-all flex flex-col gap-3'
                    >
                    <img 
                        src={AustronautLogo} 
                        alt="Austronaut logo" 
                        className='w-16' 
                    />
                    <h2 className='text-white text-xl font-semibold'>Austronaut</h2>
                    <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas temporibus cupiditate, voluptates voluptas corporis nostrum nobis sequi tempora molestias, repellat dolores magni sapiente fugiat obcaecati, et velit deleniti quos.</p>
                    <div className='flex items-center gap-2'>
                        <span className='py-1 px-2 rounded-xl bg-blue-600 text-white text-xs'>
                            React
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-yellow-500 text-white text-xs'>
                            JS
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-blue-400 text-white text-xs'>
                            Tailwind CSS
                        </span>
                    </div>

                    <Link className='text-blue-500 hover:underline cursor-none'>See more →</Link>
                    

                    </motion.div>
                    <motion.div
                        initial={{scale: 0, y: 50}}
                        animate={{scale: 1, y: 0}}
                        transition={{duration: 0.6, ease: 'easeIn'}}
                        viewport={{once: true}}
                        className='bg-neutral-900 rounded-4xl p-6 col-span-12 md:col-span-4 lg:col-span-4 hover:scale-105 transition-all flex flex-col gap-3'
                    >
                    <img 
                        src={HiAppLogo} 
                        alt="Austronaut logo" 
                        className='w-16' 
                    />
                    <h2 className='text-white text-xl font-semibold'>Hi</h2>
                    <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas temporibus cupiditate, voluptates voluptas corporis nostrum nobis sequi tempora molestias, repellat dolores magni sapiente fugiat obcaecati, et velit deleniti quos.</p>
                    <div className='flex items-center gap-2'>
                        <span className='py-1 px-2 rounded-xl bg-blue-600 text-white text-xs'>
                            React
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-yellow-500 text-white text-xs'>
                            JS
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-blue-400 text-white text-xs'>
                            Tailwind CSS
                        </span>
                    </div>

                    <Link className='text-blue-500 hover:underline cursor-none'>See more →</Link>
                    

                    </motion.div>
                    <motion.div
                        initial={{scale: 0, y: 50}}
                        animate={{scale: 1, y: 0}}
                        transition={{duration: 0.6, ease: 'easeIn'}}
                        viewport={{once: true}}
                        className='bg-neutral-900 rounded-4xl p-6 col-span-12 md:col-span-4 lg:col-span-4 hover:scale-105 transition-all flex flex-col gap-3'
                    >
                    <img 
                        src={DishoLogo} 
                        alt="Austronaut logo" 
                        className='w-16' 
                    />
                    <h2 className='text-white text-xl font-semibold'>Disho Replica</h2>
                    <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas temporibus cupiditate, voluptates voluptas corporis nostrum nobis sequi tempora molestias, repellat dolores magni sapiente fugiat obcaecati, et velit deleniti quos.</p>
                    <div className='flex items-center gap-2'>
                        <span className='py-1 px-2 rounded-xl bg-blue-600 text-white text-xs'>
                            React
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-yellow-500 text-white text-xs'>
                            JS
                        </span>
                        <span className='py-1 px-2 rounded-xl bg-blue-400 text-white text-xs'>
                            Tailwind CSS
                        </span>
                    </div>

                    <Link className='text-blue-500 hover:underline cursor-none'>See more →</Link>
                    

                    </motion.div>
                </div>



            </div>

        </div>


    
    </>
  )
}

