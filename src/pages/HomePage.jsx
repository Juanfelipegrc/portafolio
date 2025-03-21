import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { PrincipalProfilePicture } from '../assets';
import { useNavigate } from 'react-router';
import { useAnimations } from '../hooks/useAnimations';
import { projects } from '../data/projects';
import { ContactForm, ProjectCard } from '../components';
import { AnimatePresence } from 'motion/react';


export const HomePage = () => {

    const [animateExit, setAnimateExit] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const {lastPage, onSetLastPage, screenWidth} = useAnimations();
    const [cutProjects, setCutProjects] = useState(projects);

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

    }, []);

    useEffect(() => {
      
        if(screenWidth <= 768){
            setCutProjects(projects.slice(0, 4));
        } else {
            setCutProjects(projects.slice(0, 5));
        }

    }, [screenWidth]);

    useEffect(() => {
      
        if(showMore){
            setTimeout(() => {
                setCutProjects(projects)
            }, 300);
        }

    }, [showMore])
    



    
    

    

  return (
    <>

        <div className='w-full flex flex-col items-center bg-black'>

            {/* HOME */}

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
                        <button className='bg-blue-400 flex items-center justify-center px-3 py-2 rounded-full cursor-none hover:scale-105 transition-all duration-200'>
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


            {/* PROJECTS */}

            <div id='projects' className=' w-full md:p-4 lg:p-8 flex flex-col justify-center items-center relative'>

                <div>
                    <h2 className='text-center text-white text-4xl font-medium'>Some 
                    <span className='text-blue-300'> Projects</span></h2>
                </div>


                <div className='grid grid-cols-12 gap-6 p-6 sm:p-4 md:p-2 lg:p-8 mt-3'>
                    
                    {
                        cutProjects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                image={project.logo} 
                                title={project.name} 
                                desc={project.desc} 
                                tecnologies={project.tecnologies}
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
                <div className="max-w-7xl lg:h-[26rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="w-full flex flex-col justify-center">
                    
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
                        <p><strong>Phone:</strong> +57 3162067218</p>
                        <p>
                        <strong>WhatsApp:</strong> <a className="text-blue-400 underline" href="https://wa.me/573162067218" target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
                        </p>
                        <p>
                        <strong>GitHub:</strong> <a className="text-blue-400 underline" href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
                        </p>
                    </div>
                    </div>
                </div>
            </section>


        </div>


    
    </>
  )
}
