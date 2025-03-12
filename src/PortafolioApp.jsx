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
        className='w-full h-full overflow-hidden'
        onMouseDown={handleClick}
      >


        <Header/>    

        <Cursor cursorSize={cursorSize}/>
        
        <Outlet/>
        
      </div>
    
    
    </>
  )
}
