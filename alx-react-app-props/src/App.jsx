import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/ProfilePage/ProfilePage'
import  UserContext  from './components/UserContext/UserContext'


function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
      
    </>
  )
}

export default App
