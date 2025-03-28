import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { useNavigate } from 'react-router';
import { BootstrapLogo, MotionLogo, PrincipalProfilePicture, ReactLogo, ReactRouter, ReduxLogo, TailwindCSS } from '../assets';
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


      useEffect(() => {
        
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })


      }, []);
      


  return (
    <>
    
      <div className='bg-black w-full pt-[7.6rem] sm:pt-[10rem]'>

        <div className='flex w-full justify-center'>
          <div className='flex flex-col w-full md:w-[90%]  lg:w-[70%]'>

            <div className='w-full p-5 flex flex-col gap-20'>

              <div className='flex flex-col items-center md:items-start lg:items-start'>
                <img 
                  src={PrincipalProfilePicture} 
                  alt="Profile Picture" 
                  className='w-[18rem] h-[18rem] sm:w-[23rem] sm:h-[23rem] md:w-[20rem] md:h-[20rem] rounded-full'
                />

                <h2 className='text-white text-center md:text-start lg:text-start text-3xl md:text-4xl lg:text-4xl font-medium mt-6'>Juan <span className='text-blue-400'>Felipe</span> García Rojas</h2>
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
                    href='https://github.com/Juanfelipegrc'
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

      </div>
       
    </>
  )
}
