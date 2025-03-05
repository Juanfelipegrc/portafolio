import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './components'

export const PortafolioApp = () => {
  return (
    <>

        <Header/>
    
        <Outlet/>
    
    </>
  )
}
