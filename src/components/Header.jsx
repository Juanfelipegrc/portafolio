import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const Header = () => {
  return (
    <>
    
    
        <div className="grid grid-cols-12 bg-black text-white h-20 items-center">
            
            <div className='col-span-12 flex justify-center'>
                <TypeAnimation
                    sequence={[
                        "Hi dear!",  
                        1000, 
                        "I'm Juan Felipe García Rojas.",
                        1000,              
                        "I'm React JS software developer.", 
                        1000, 
                        "Tell me what you need and i'll do it.", 
                        1000, 
                    ]}
                    wrapper="h1"
                    speed={50}  
                    repeat={Infinity}  
                    className="text-2xl text-white font-light"
                />
            </div>
            {/* <div className='grid-cols-12 col-span-6 h-full hidden sm:hidden md:hidden lg:grid'>

                <div className='col-span-3 hover:bg-neutral-950 h-full flex items-center justify-center transition-all duration-300 hover:cursor-pointer'>
                    <p className='text-center font-ligh'>option 1</p>
                </div>
                <div className='col-span-3 hover:bg-neutral-950 h-full flex items-center justify-center transition-all duration-300 hover:cursor-pointer'>
                    <p className='text-center font-ligh'>option 2</p>
                </div>
                <div className='col-span-3 hover:bg-neutral-950 h-full flex items-center justify-center transition-all duration-300 hover:cursor-pointer'>
                    <p className='text-center font-ligh'>option 3</p>
                </div>
                <div className='col-span-3 hover:bg-neutral-950 h-full flex items-center justify-center transition-all duration-300 hover:cursor-pointer'>
                    <p className='text-center font-ligh'>option 4</p>
                </div>


            </div> */}
        </div>
    
    
    </>
  )
}
