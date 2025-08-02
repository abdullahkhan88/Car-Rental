import { useState } from 'react'
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
import Login from './Website/Pages/LoginModal';

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Vehicles' element={<Vehicles/>}/>
          <Route path='/Car-Details' element={<CarDetails/>}/>
          <Route path='/About-us' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
           <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
