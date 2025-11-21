import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { PrincipalProfilePicture } from '../assets';
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';
import { projects } from '../data/projects';
import { AboutMeButton, ContactForm, ProjectCard } from '../components';
import { AnimatePresence } from 'motion/react';


export const HomePage = () => {

    const [readMore, setReadMore] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const {lastPage, onSetLastPage, screenWidth} = useAnimations();
    const [cutProjects, setCutProjects] = useState(projects);

    const navigate = useNavigate();



    const onSetReadMore = (value) => {
        setTimeout(() => {
            setReadMore(value);
        }, 600);
    };

    const onSetIsClosing = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
        }, 900);
    }

    const onSetIsOpening = () => {
        setIsOpening(true)
        setTimeout(() => {
            setIsOpening(false)
        }, 900);
    }

  

    useEffect(() => {
      
        if(lastPage === '') {
            onSetLastPage('home');
        } else{
            if(lastPage !== 'home'){
                onSetLastPage('home');
            }
        }

    }, []);

    useEffect(() => {
      
        if(screenWidth <= 768 && cutProjects.length === projects.length && !showMore){
            setCutProjects(projects.slice(0, 4));
        } else if(screenWidth >= 768 && cutProjects.length === projects.length && !showMore) {
            setCutProjects(projects.slice(0, 6));
        }

    }, [screenWidth]);

    useEffect(() => {
      
        if(showMore){
            setTimeout(() => {
                setCutProjects(projects)
            }, 300);
        }

    }, [showMore]);
    


    useEffect(() => {
            
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })


    }, []);
    


    

  return (
    <>

        <div className='w-full flex flex-col items-center bg-black'>

        

            {/* HOME */}

            <div className='flex items-center justify-center pt-[8rem] sm:pt-0 sm:h-[130vh] md:h-screen lg:h-screen'>
                <div className={`w-[90%] sm:w-[80%] md:w-[88%] lg:w-[70%] grid grid-cols-12`}>


                    <div className='col-span-12 flex justify-center md:justify-end lg:justify-end items-center md:items-start lg:items-center md:col-span-5 lg:col-span-5 pe-0 md:pe-7 lg:pe-7 md:pt-3 lg:pt-0'>
                        <img 
                            src={PrincipalProfilePicture} 
                            alt="Profile Picture" 
                            className='w-[18rem] h-auto sm:w-[23rem] md:w-[15rem] lg:w-[16rem] rounded-full aspect-square'
                        />
                    </div>




                    <div className='col-span-12 md:col-span-7 lg:col-span-7 px-5 pt-5 flex flex-col justify-center'>
                        <h1 className='text-white text-center md:text-start lg:text-start font-semibold text-4xl md:text-4xl lg:text-5xl'>
                            Hello I'm <br className='sm:hidden md:inline-block lg:inline-block' /> 
                            <span className='text-blue-300'>Juan Felipe</span>
                        </h1>
                        <p className='mt-5 text-[1.1rem] text-white text-center md:text-start lg:text-start'>
                            Hi, I'm Juan Felipe García Rojas, a <b className='text-blue-300'>Frontend</b> and <b className='text-blue-300'>Mobile</b> developer specialized in modern web and mobile interfaces. While my main focus is the frontend, I have a functional understanding of backend logic using <b className='text-blue-300'>.NET</b>. My main stack includes <b className='text-blue-300'>React JS</b>, React Native, TypeScript, JavaScript, Tailwind CSS, Framer Motion, HTML, CSS, Sass, C#, SQL, and T-SQL.
                        </p>




                    </div>

                    
                    <div className='col-span-12 mt-5 mb-16 sm:mb-8 md:mb-0 flex justify-center items-center h-[2.8rem] md:h-[2.5rem] lg:h-[2.8rem]'>
                        <AboutMeButton 
                            readMore={readMore} 
                            isClosing={isClosing} 
                            isOpening={isOpening}
                            onSetReadMore={onSetReadMore}
                            onSetIsClosing={onSetIsClosing}
                            onSetIsOpening={onSetIsOpening}
                        />
                    </div>

                    
                </div>
            </div>


            {/* PROJECTS */}

            <div id='projects' className=' w-full md:p-4 lg:p-8 flex flex-col justify-center items-center relative'>

                <div>
                    <h2 className='text-center text-white text-4xl font-medium'>Some 
                    <span className='text-blue-300'> Projects</span></h2>
                </div>


                <div className='grid grid-cols-12 gap-6 p-6 sm:p-4 md:p-1 lg:p-8 mt-3'>
                    
                    {
                        cutProjects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                image={project.logo}
                                title={project.name} 
                                desc={project.desc} 
                                linkN={project.linkN}
                                linkGH={project.linkGH}
                                video={project.video}
                                technologies={project.technologies}
                            />
                        ))
                    }
                    
                </div>

                <AnimatePresence>

                   {
                        !showMore && 
                                <motion.div
                                    initial={{y: 0, opacity: 1}}
                                    exit={{y: 500, opacity: 0}}
                                    transition={{duration: 0.6, ease: 'easeInOut'}}
                                    className='w-screen'
                                >
                                <div className='absolute bottom-0 w-full h-[17rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] bg-gradient-to-b from-transparent via-black to-black pointer-events-none blur-md'></div>

                                <div className='w-full absolute bottom-20 sm:bottom-16 md:bottom-20 lg:bottom-36 flex justify-center items-center z-[9]'>
                                    <button 
                                        className='bg-blue-400 flex items-center justify-center px-3 py-2 rounded-full cursor-none hover:scale-105 transition-all duration-200'
                                        onClick={() => setShowMore(true)}
                                    >
                                        <span className='text-white text-[1.1rem] font-light'>See More</span>
                                        &nbsp;
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            height="1.2rem"
                                            className='mt-[2px]'
                                            viewBox="0 -960 960 960" 
                                            width="1.2rem" 
                                            fill="#fff"
                                        ><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>

                                    </button>
                                </div>

                            </motion.div>
                    }

                </AnimatePresence>

                


            </div>



            {/* CONTACT ME */}


            <section id="contact" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-16 bg-black mt-16 md:mt-32 lg:mt-36">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="w-full h-[28rem] sm:h-[27rem] md:h-[26rem] lg:h-[26rem] flex flex-col justify-center">
                    
                    <ContactForm />
                    </div>

                    <div className="w-full flex flex-col justify-center text-white space-y-5 md:pl-10">
                    <div>
                        <h3 className="text-2xl font-medium mb-3">Let's <span className='text-blue-400'>Connect</span></h3>
                        <p className="text-gray-400 mb-5">
                        If you're interested in working together or just want to say hello, feel free to reach out.
                        </p>
                    </div>
                    <div className="text-base space-y-3">
                        <p><strong>Email:</strong> felipegarciarjs@gmail.com</p>    
                        <p>
                        <strong>GitHub:</strong> <a className="text-blue-400 underline cursor-none hover:text-blue-300 transition-all" href="https://github.com/Juanfelipegrc?tab=repositories" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
                        </p>
                        <p>
                        <strong>Production Links:</strong> <a className="text-blue-400 underline cursor-none hover:text-blue-300 transition-all" href="https://linktr.ee/juanfelipegrcrjs" target="_blank" rel="noopener noreferrer">Visit Production Links</a>
                        </p>
                    </div>
                    </div>
                </div>
            </section>


        </div>


    
    </>
  )
}
