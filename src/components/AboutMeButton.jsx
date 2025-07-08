import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import React, { useEffect, useState } from 'react'

export const AboutMeButton = ({readMore, isClosing, isOpening, onSetReadMore, onSetIsClosing, onSetIsOpening}) => {


    const [readyToShow, setReadyToShow] = useState(false);
    const [readyToShowButton, setReadyToShowButton] = useState(true)
    const [userHasClicked, setUserHasClicked] = useState(false);



    const onSetUserHasClicked = (value) => {
        if(userHasClicked) return;
        setUserHasClicked(value)
    }

 

    const onSetReadyToShow = (value) => {
        if(value){
            setTimeout(() => {
                setReadyToShow(value)
            }, 1200);
        } else {
            setTimeout(() => {
                setReadyToShow(value)
            }, 250);
        }
    }

    const onSetReadyToShowButton = (value) => {
        if(value){
            setTimeout(() => {
                setReadyToShowButton(value)
            }, 1300);
        } else {
            setTimeout(() => {
                setReadyToShowButton(value)
            }, 250);
        }
    }


    useEffect(() => {
      
        if(readMore && !isOpening){
            document.body.classList.add('overflow-hidden');
        } else if (!readMore) {
            document.body.classList.remove('overflow-hidden');
        }

    }, [readMore, isClosing, isOpening])
    
  

  
    return (

    <div className='col-span-12 flex items-center justify-center mt-3.5'>
        <AnimatePresence>
            
            <motion.div
                layout
                initial={userHasClicked?{borderRadius: '0px'} : {}}
                animate={ userHasClicked?{borderRadius: !readMore && !isClosing? '999px' : '0px'} : {}}
                transition={{
                    layout: { duration: 0.2, ease: "easeInOut" },         
                    borderRadius: { duration: isOpening && readMore? 0.1 : 0.5, ease: "easeInOut" } 
                }}
                className={!readMore? `flex bg-blue-400 items-center justify-center w-[8.5rem] md:w-[8rem] lg:w-[8.5rem] h-[2.8rem] md:h-[2.5rem] lg:h-[2.8rem] ${!userHasClicked && 'rounded-full'} z-[999] cursor-none ${!isClosing && 'hover:scale-105 transition-all duration-200'}` : `fixed top-0 left-0 z-[999] ${isClosing && !readyToShow && 'bg-blue-400'} ${isOpening? 'bg-blue-400' : 'bg-black'} w-screen h-screen transition-colors duration-500`}
                onClick={() => {
                    if(!readMore){
                        onSetReadMore(true);
                        onSetReadyToShow(true);
                        onSetReadyToShowButton(false);
                        onSetUserHasClicked(true); 
                        onSetIsOpening();
                    }
                }}

            >

                    {
                        !readMore?
                            (
                                <AnimatePresence>
                                    {
                                        !isClosing && !isOpening && readyToShowButton && (
                                
                                            <motion.div 
                                            className='flex justify-center items-center'
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            transition={{duration: 0.4, ease: 'easeInOut'}}
                                            >
                                            
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    height="1.2rem"
                                                    className='mt-[2px]'
                                                    viewBox="0 -960 960 960" 
                                                    width="1.2rem" 
                                                    fill="#fff"
                                                >
                                                    <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/>
                                                </svg>

                                                &nbsp;
                                                <span className='text-white text-[1.1rem] font-light'>Read More</span>
                                            

                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            )
                        : 
                        (
                            <AnimatePresence>
                                {
                                    !isOpening && !isClosing && readyToShow && (
                                        <motion.div
                                            className='bg-black p-5 w-full h-full flex flex-col items-center gap-20 py-20 overflow-y-scroll overflow-x-hidden'
                                            initial={{opacity: 0}}
                                            animate={{opacity:1}}
                                            exit={{opacity: 0}}
                                            transition={{duration: 0.4, ease: 'easeInOut'}}       
                                        >
                                    
                                            <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            transition={{duration: 0.4, ease: 'easeInOut'}}
                                            onClick={() => {
                                                onSetReadMore(false);
                                                onSetReadyToShow(false);
                                                onSetReadyToShowButton(true);
                                                onSetIsClosing();
                                            }}
                                            className='absolute top-5 right-3 sm:top-2 sm:right-4 md:top-5 md:right-6  p-2'
                                            >

                                                <motion.svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    height="1.7rem" 
                                                    viewBox="0 -960 960 960" 
                                                    width="1.7rem" 
                                                    fill="#fff">
                                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                                </motion.svg>

                                            </motion.div>

                                            <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[88%] lg:w-[70%] items-center md:items-start lg:items-start'>
                            
                                            <h2 className='text-white text-center md:text-start lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium my-5'>About <span className='text-blue-300'>Me</span></h2>
                                            <p className='text-white text-center md:text-start lg:text-start font-light'>
                                                Hello, I'm Juan Felipe García Rojas, a dedicated <b className='text-blue-300'>Full stack</b> and <b className='text-blue-300'>Mobile</b> software developer. I specialize in building responsive and engaging applications using <b>React JS</b> and <b>.NET</b> for web development, and <b>React Native</b> for cross-platform mobile solutions.
                                                <br /><br />
                                                My core expertise includes JavaScript (ES6+), C#, SQL, T-SQL, HTML5, and CSS3. I'm experienced with modern tools and frameworks such as Bootstrap, Tailwind CSS, Sass, and Framer Motion. I also use TypeScript to ensure scalability and maintainability across all projects. I'm passionate about writing clean code and creating high-quality digital experiences for both web and mobile users.
                                            </p>

                                            </div>
                            
                                            
                                            
                                            <div className='w-[90%] sm:w-[80%] md:w-[88%] lg:w-[70%]'>
                                            <h2 className='text-white text-3xl font-medium'>
                                                Skills:
                                            </h2>
                            
                                            <div className='grid grid-cols-12 w-full ps-10 gap-10'>
                            
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Programing <br /> <span className='text-blue-300'>Languages</span>
                                                </h2>
                                                
                                                <ul className='text-white'>
                                                    <li>- JavaScript.</li>
                                                    <li>- TypeScript.</li>
                                                    <li>- C#.</li>
                                                </ul>
                                                </div>
                            
                            
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Web <br /> <span className='text-blue-300'>Development</span>
                                                </h2>
                                                
                                                <ul className='text-white'>
                                                    <li>- React.</li>
                                                    <li>- HTML.</li>
                                                    <li>- CSS.</li>
                                                    <li>- JavaScript.</li>
                                                    <li>- TypeScript.</li>
                                                </ul>
                                                </div>

                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Mobile <br /> <span className='text-blue-300'>Development</span>
                                                </h2>
                                                
                                                <ul className='text-white'>
                                                    <li>- React Native.</li>
                                                    <li>- CSS.</li>
                                                    <li>- JavaScript.</li>
                                                    <li>- TypeScript.</li>
                                                </ul>
                                                </div>

                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Backend <br /> <span className='text-blue-300'>Development</span>
                                                </h2>
                                                
                                                <ul className='text-white'>
                                                    <li>- ASP.NET core.</li>
                                                    <li>- ASP.NET core MVC.</li>
                                                    <li>- ASP.NET MVC.</li>
                                                </ul>
                                                </div>
                            
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Database <br /> <span className='text-blue-300'>Lenguages</span>
                                                </h2>
                                                
                                                <ul className='text-white'>
                                                    <li>- SQL.</li>
                                                    <li>- T-SQL.</li>
                                                </ul>
                                                </div>
                            
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Versions <br /> <span className='text-blue-300'>Control</span>
                                                </h2>
                            
                                                <ul className='text-white'>
                                                    <li>- Git.</li>
                                                    <li>- GitHub.</li>
                                                
                                                </ul>
                                                </div>


                            
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Frameworks & <br /> <span className='text-blue-300'>styles</span> tools
                                                </h2>
                            
                                                <ul className='text-white'>
                                                    <li>- Tailwind CSS</li>
                                                    <li>- Bootstrap.</li>
                                                
                                                </ul>
                                                </div>



                            

                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    App <br /> <span className='text-blue-300'>Testing </span>
                                                </h2>
                            
                                                <ul className='text-white'>
                                                    <li>- Unit testing (Jest).</li>
                                                    <li>- Integration testing (Jest).</li>
                                                
                                                </ul>
                                                </div>
                                                
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                                <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                                    Language <br /> <span className='text-blue-300'>Skills </span>
                                                    & Levels
                                                </h2>
                            
                                                <ul className='text-white'>
                                                    <li>- English B2.</li>
                                                    <li>- Spanish C2.</li>
                                                
                                                </ul>
                                                </div>
                                                
                            
                                            </div>
                                            </div>
                            
                            
                            
                                            <div className='w-[90%] sm:w-[80%] md:w-[88%] lg:w-[70%]'>
                                            <h2 className='text-white text-3xl font-medium'>
                                                GitHub & Netlify Projects:
                                            </h2>
                            
                                            <div className='mt-6 flex justify-center md:justify-start lg:justify-start items-center gap-6'>
                            
                                                <a 
                                                className='w-[45%] md:w-[40%] lg:w-[40%] flex justify-center items-center cursor-none py-2.5 rounded-md text-white border border-white hover:scale-105 duration-200'
                                                href='https://github.com/Juanfelipegrc?tab=repositories'
                                                target='_blank'
                            
                                                >
                            
                                                GitHub
                            
                                                </a>
                            
                                                <a 
                                                className='w-[45%] md:w-[40%] lg:w-[40%] flex justify-center items-center cursor-none py-2.5 rounded-md bg-blue-400 text-white hover:scale-105 duration-200'
                                                href='https://linktr.ee/juanfelipegrcrjs'
                                                target='_blank'
                                                >
                            
                                                Projects Links
                            
                                                </a>
                            
                                            </div>
                                            </div>
                            
                                        </motion.div>
                                    )
                                

                                
                        
                                }
                                
                            </AnimatePresence>
                        )
                            
                    }
            </motion.div>

        </AnimatePresence>
        
    </div>
  )
}
