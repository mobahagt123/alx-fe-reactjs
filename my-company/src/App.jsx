import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='services' element={<Services />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='*' element={<div>Not Found</div>}/>
      
    </Route>
  )
)

function App() {
  return (
    <>
      <Navbar />
      <Outlet />      
    </>
  )
}

export default App
