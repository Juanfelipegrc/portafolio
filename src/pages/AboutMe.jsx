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


  return (
    <>
    
      <div className='bg-black w-full pt-[10rem]'>

        <div className='flex w-full justify-center'>
          <div className='grid grid-cols-12 w-full md:w-[80%]  lg:w-[70%]'>

            <div className='col-span-12 md:col-span-6 lg:col-span-5 flex justify-center items-center md:items-start lg:items-start'>

              <img 
                src={PrincipalProfilePicture} 
                alt="Profile Picture" 
                className='w-[20rem] h-[20rem] rounded-full'
              />

            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-7 p-5'>

              <h2 className='text-white text-center md:text-start lg:text-start text-3xl md:text-4xl lg:text-4xl font-medium'>Juan <span className='text-blue-400'>Felipe</span> García Rojas</h2>
              <p className='text-white text-center md:text-start lg:text-start font-light mt-6'>

              I'm a passionate Junior <span className='text-blue-400'>React.js</span> Software Developer from Colombia, dedicated to building modern and responsive web applications. I specialize in React.js and have hands-on experience with a wide range of front-end technologies including Tailwind CSS, Bootstrap, CSS, HTML, JavaScript, React Redux, and React Router. I also have some knowledge of Sass and TypeScript, which I continue to develop as I grow in my career. <br /> <br />

              I enjoy creating clean, efficient, and user-friendly interfaces while constantly learning new tools and technologies to improve my work. I'm driven by the desire to build impactful digital solutions and collaborate with others in innovative development environments.

              </p>

              <br />
              <br />
              
              <h2 className='text-white text-3xl font-medium'>
                Skills:
              </h2>

              <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-5'>

                <div className='w-full h-full'>
                  <img 
                    src={MotionLogo} 
                    alt="Motion Logo" 
                    className='h-full w-full'
                  />
                </div>

                <div className='w-full h-full'>
                  <img 
                    src={ReactRouter} 
                    alt="React Router Logo" 
                    className='h-full w-full'
                  />
                </div>

                <div className='w-full h-full p-4'>
                  <img 
                    src={ReduxLogo} 
                    alt="Redux Logo" 
                    className='h-full w-full'
                  />
                </div>

                <div className='w-full h-full p-4'>
                  <img 
                    src={TailwindCSS} 
                    alt="Tailwind CSS Logo" 
                    className='h-full w-full'
                  />
                </div>

                <div className='w-full h-full p-4'>
                  <img 
                    src={BootstrapLogo} 
                    alt="Bootstrap Logo" 
                    className='h-full w-full'
                  />
                </div>

              </div>




              <h2 className='text-white text-3xl font-medium my-12'>
                GitHub & Netlify Projects:
              </h2>

              <div className='mt-6 flex justify-start items-center gap-6'>

                <button className='w-[40%] py-2.5 rounded-md text-white border border-white'>

                  GitHub

                </button>

                <button className='w-[40%] py-2.5 rounded-md bg-blue-400 text-white'>

                  Projects 

                </button>

              </div>


            </div>

          </div>
        </div>

      </div>
       
    </>
  )
}
