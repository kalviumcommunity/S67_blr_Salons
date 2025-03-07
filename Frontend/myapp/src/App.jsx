import './App.css'
import AboutUs from './pages/aboutUs'
import React from 'react'
import Cards from './Components/Cards'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SalonList from './pages/SalonList';
import EntityFormPage from './pages/AddSalon';
export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/about" element={<Cards/>}/>
        <Route path="/salons" element={<SalonList/>}/>
        <Route path="/add" element={<EntityFormPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
