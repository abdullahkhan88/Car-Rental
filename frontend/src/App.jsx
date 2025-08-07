import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'animate.css';
import Navbar from './Website/Components/Navbar';
import Home from './Website/Pages/Home';
import CarCard from './Website/Components/CarCard';
import Footer from './Website/Components/Footer';
import Vehicles from './Website/Pages/Vehicles';
import CarDetails from './Website/Pages/CarDetails';
import About from './Website/Pages/About';
import Contact from './Website/Pages/Contact';
import PageNotFound from './Website/Pages/PageNotFound';
import LoginModal from './Website/Pages/LoginModal';

import { ModalContext } from './Website/Context/ModalContext';

function App() {

  const {showLoginModal, closeLoginModal} = useContext(ModalContext)

  return (
    <>
     {showLoginModal && <LoginModal onClose={closeLoginModal} />}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Vehicles' element={<Vehicles/>}/>
          <Route path='/Car-Details' element={<CarDetails/>}/>
          <Route path='/About-us' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
            
           <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
