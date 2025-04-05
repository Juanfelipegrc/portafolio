import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import React, { useEffect } from 'react'

export const AboutMeModal = ({isOpen, onClose}) => {


    useEffect(() => {
      
        if(isOpen){
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

    }, [isOpen])
    
  

  
    return (
    <>
    

        <AnimatePresence>

            {
                isOpen &&
                <motion.div    
                    className='w-screen h-screen z-[9998] overflow-hidden bg-black/65 inset-0 fixed top-0 left-0 flex justify-center items-center'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.6, ease: 'easeInOut'}}
                >
                    <div className='bg-black no-scroll-bar shadow-[0_0.1rem_0.8rem_rgba(255,255,255,0.25)] w-[85%] md:w-[70%] lg:w-[60%] h-[65%] md:h-[70%] lg:h-[60%] px-3 py-14 sm:p-7 md:px-12 md:py-16 lg:px-16 lg:py-16 rounded-xl overflow-y-scroll relative'>
                        <div className='flex flex-col w-full'>

                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.4, ease: 'easeInOut'}}
                                onClick={onClose}
                                className='absolute top-2 left-3 sm:top-2 sm:left-4 md:top-4 md:left-6  my-8 p-2'
                            >

                                <motion.svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1.5rem" 
                                    viewBox="0 -960 960 960" 
                                    width="1.5rem" 
                                    fill="#fff">
                                        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                                </motion.svg>

                            </motion.div>
                        
                            <div className='w-full p-5 flex flex-col gap-20'>
                
                                <div className='flex flex-col items-center md:items-start lg:items-start'>
                
                                <h2 className='text-white text-center md:text-start lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium'>Juan <span className='text-blue-400'>Felipe</span> García Rojas</h2>
                                <p className='text-white text-center md:text-start lg:text-start font-light mt-6'>
                
                                I'm a passionate Junior <span className='text-blue-400'>React.js</span> Software Developer from Colombia, dedicated to building modern and responsive web applications. I specialize in React.js and have hands-on experience with a wide range of front-end technologies including Tailwind CSS, Bootstrap, CSS, HTML, JavaScript, React Redux, and React Router. I also have some knowledge of Sass and TypeScript, which I continue to develop as I grow in my career. <br /> <br />
                
                                I enjoy creating clean, efficient, and user-friendly interfaces while constantly learning new tools and technologies to improve my work. I'm driven by the desire to build impactful digital solutions and collaborate with others in innovative development environments.
                
                                </p>
                                </div>
                
                                
                                
                                <div className='w-full'>
                                <h2 className='text-white text-3xl font-medium'>
                                    Skills:
                                </h2>
                
                                <div className='grid grid-cols-12 w-full ps-10 gap-3'>
                
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                        Programing <span className='text-blue-400'>Lenguages</span>
                                    </h2>
                                    
                                    <ul className='text-white'>
                                        <li>- JavaScript.</li>
                                        <li>- TypeScript.</li>
                                    </ul>
                                    </div>
                
                
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                        Web Development
                                    </h2>
                                    
                                    <ul className='text-white'>
                                        <li>- React.</li>
                                        <li>- HTML.</li>
                                        <li>- CSS.</li>
                                        <li>- JavaScript.</li>
                                    </ul>
                                    </div>
                
                
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                        Frameworks & <span className='text-blue-400'>styles</span> tools (CSS/UI)
                                    </h2>
                
                                    <ul className='text-white'>
                                        <li>- Tailwind CSS</li>
                                        <li>- Bootstrap.</li>
                                    
                                    </ul>
                                    </div>
                
                
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                        Versions Control
                                    </h2>
                
                                    <ul className='text-white'>
                                        <li>- Git.</li>
                                        <li>- GitHub.</li>
                                    
                                    </ul>
                                    </div>
                
                
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <h2 className='text-white text-[1.6rem] font-medium mt-6'>
                                        Testing (Jest)
                                    </h2>
                
                                    <ul className='text-white'>
                                        <li>- Unit testing.</li>
                                        <li>- Integration testing.</li>
                                    
                                    </ul>
                                    </div>
                                    
                                    
                
                                </div>
                                </div>
                
                
                
                                <div>
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
                
                
                
                
                
                
                            </div>
                
                            </div>
                    </div>
                </motion.div>

            }

        </AnimatePresence>

    
    </>
  )
}
