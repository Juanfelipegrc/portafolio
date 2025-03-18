import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import * as motion from 'motion/react-client'
import { FloatCube } from './FloatCube';
import { slide as Menu } from 'react-burger-menu';
import { useLocation } from 'react-router';

export const Header = () => {

    const [scrollY, setScrollY] = useState(window.scrollY);

    const [option1ButtonHover, setOption1ButtonHover] = useState(false);
    const [option2ButtonHover, setOption2ButtonHover] = useState(false);
    const [option3ButtonHover, setOption3ButtonHover] = useState(false);
    const [headerIsOpen, setHeaderIsOpen] = useState(false);

    const {pathname} = useLocation();

    useEffect(() => {
      
        const onChangeScroll = () => {
            setScrollY(window.scrollY);    
        };

        window.addEventListener('scroll', onChangeScroll);

        return () => {
            window.removeEventListener('scroll', onChangeScroll)
        }
       

    }, []);

    


    


  return (
    <>
    
    
        <div className={`grid grid-cols-12 ${scrollY === 0? 'bg-black text-white' : 'bg-black text-white'} transition-all duration-500 h-28 items-center w-full fixed top-0 z-[10]`}>

            
            <div className='col-span-3 flex gap-4 sm:gap-1 md:gap-1 lg:gap-1 justify-center items-center ps-7 md:ps-0 lg:ps-0'>

                <FloatCube/>

                <h1
                    className="text-[2.5rem] font-bold"
                >
                    JF
                </h1>
                
            </div>
            <div className='col-span-9 flex justify-end md:justify-center lg:justify-center pe-5 md:pe-0 lg:pe-0'>


            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="2rem" 
                viewBox="0 -960 960 960" 
                width="2rem" 
                className='md:hidden lg:hidden'
                onClick={() => setHeaderIsOpen(true)}
                fill="#fff">
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/>
            </svg>


                <Menu
                    isOpen={headerIsOpen}
                    className='bg-neutral-950'
                    right
                    onStateChange={({headerIsOpen}) => setHeaderIsOpen(headerIsOpen)}

                >

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="2rem" 
                        viewBox="0 -960 960 960" 
                        width="2rem" 
                        className='mt-8 ms-3'
                        onClick={() => setHeaderIsOpen(false)}
                        fill="#fff">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>

                    <div 
                        className='grid-cols-12 grid-rows-12 gap-3 w-full h-full grid-important md:hidden lg:hidden p-6'
                    >


                    <motion.button 
                        onHoverStart={() =>setOption1ButtonHover(true)}
                        onHoverEnd={() => setOption1ButtonHover(false)}
                        className='bg-transparent col-span-12 row-span-1 text-white text-[1rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road'
                    >
                        <div className={`flex items-center justify-center ${pathname === '/'? 'text-blue-300' : '' }`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1.45rem"
                                className='mb-1' 
                                viewBox="0 -960 960 960" 
                                width="1.45rem" 
                                fill={pathname === '/' ? '#8ec5ff' : '#fff'}
                            ><path d="M360-160v-240h240v240H360Zm80-80h80v-80h-80v80ZM88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-392-299L88-440Zm392 160Z"/></svg>
                            &nbsp;
                            Home
                        </div>
                        <motion.hr 
                            className='bg-white h-[0.2] transition-all'
                            style={{width: option1ButtonHover || pathname === '/'? '100%' : '0%', color: pathname === '/'? '#8ec5ff' : '#fff'}}

                        />
                    </motion.button>


                    <motion.button 
                        onHoverStart={() =>setOption2ButtonHover(true)}
                        onHoverEnd={() => setOption2ButtonHover(false)}
                        className='bg-transparent col-span-12 row-span-1 text-white text-[1rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road'
                    >
                        <div className={`flex items-center justify-center ${pathname === '/about-me'? 'text-blue-300' : '' }`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1.45rem"
                                className='mb-1' 
                                viewBox="0 -960 960 960" 
                                width="1.45rem" 
                                fill={pathname === '/about-me' ? '#8ec5ff' : '#fff'}
                            ><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                            &nbsp;
                            About me
                        </div>
                        <motion.hr 
                            className='bg-white h-[0.2] transition-all'
                            style={{width: option2ButtonHover || pathname === 'about-me'? '100%' : '0%', color: pathname === '/about-me'? '#8ec5ff' : '#fff'}}

                        />
                    </motion.button>


                    
                


                </div>



                </Menu>

                <div className='grid-cols-12 gap-3 w-full h-full hidden sm:hidden md:grid lg:grid'>


                    <motion.button 
                        onHoverStart={() =>setOption1ButtonHover(true)}
                        onHoverEnd={() => setOption1ButtonHover(false)}
                        className='bg-transparent md:col-span-3 lg:col-span-2 md:col-start-6 lg:col-start-8 text-white text-[1rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road'
                    >
                        <div className={`flex items-center justify-center ${pathname === '/'? 'text-blue-300' : '' }`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1.45rem"
                                className='mb-1' 
                                viewBox="0 -960 960 960" 
                                width="1.45rem" 
                                fill={pathname === '/' ? '#8ec5ff' : '#fff'}
                            ><path d="M360-160v-240h240v240H360Zm80-80h80v-80h-80v80ZM88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-392-299L88-440Zm392 160Z"/></svg>
                            &nbsp;
                            Home
                        </div>
                        <motion.hr 
                            className='bg-white h-[0.2] transition-all'
                            style={{width: option1ButtonHover || pathname === '/'? '100%' : '0%', color: pathname === '/'? '#8ec5ff' : '#fff'}}

                        />
                    </motion.button>


                    <motion.button 
                        onHoverStart={() =>setOption2ButtonHover(true)}
                        onHoverEnd={() => setOption2ButtonHover(false)}
                        className='bg-transparent md:col-span-3 lg:col-span-2 text-white text-[1rem] font-medium flex flex-col justify-center items-center z-[2] cursor-none font-turret-road'
                    >
                        <div className={`flex items-center justify-center ${pathname === '/about-me'? 'text-blue-300' : '' }`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1.45rem"
                                className='mb-1' 
                                viewBox="0 -960 960 960" 
                                width="1.45rem" 
                                fill={pathname === '/about-me' ? '#8ec5ff' : '#fff'}
                            ><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                            &nbsp;
                            About me
                        </div>
                        <motion.hr 
                            className='bg-white h-[0.2] transition-all'
                            style={{width: option2ButtonHover || pathname === 'about-me'? '100%' : '0%', color: pathname === '/about-me'? '#8ec5ff' : '#fff'}}

                        />
                    </motion.button>


                


                </div>
            </div>
        </div>
    
    
    </>
  )
}

