import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Cursor, Header } from './components'
import { Noise } from './assets';

export const PortafolioApp = () => {
  
  const [cursorSize, setCursorSize] = useState(1);

  
  const handleClick = () => {
    setCursorSize(1.7); 

    setTimeout(() => {
        setCursorSize(1); 
    }, 200);
};



  return (
    <>


      <div 
        className='bg-black w-full min-h-screen overflow-hidden'
        onMouseDown={handleClick}
      >

        <div 
            className='fixed z-[1] h-full w-full inset-0 overflow-hidden'
            style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: '10rem',
                backgroundRepeat: 'repeat',
                opacity: 0.1
            }}
        />

        <Cursor cursorSize={cursorSize}/>
        
        <Outlet/>
        
      </div>
    
    
    </>
  )
}
