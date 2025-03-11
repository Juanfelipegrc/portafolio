import React from 'react'
import { Route, Routes } from 'react-router'
import { PortafolioApp } from '../PortafolioApp'
import { AboutMe, HomePage, Projects } from '../pages'

export const AppRouter = () => {
  return (
    <>
    
        <Routes>

            <Route path='/' element={<PortafolioApp/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/see-projects' element={<Projects/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
            </Route>

        </Routes>
    
    </>
  )
}
