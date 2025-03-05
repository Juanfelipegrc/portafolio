import React from 'react'
import { Route, Routes } from 'react-router'
import { PortafolioApp } from '../PortafolioApp'
import { HomePage } from '../pages'

export const AppRouter = () => {
  return (
    <>
    
        <Routes>

            <Route path='/' element={<PortafolioApp/>}>
                <Route index element={<HomePage/>}/>
            </Route>

        </Routes>
    
    </>
  )
}
