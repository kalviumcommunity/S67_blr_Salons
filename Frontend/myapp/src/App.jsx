import './App.css'
import AboutUs from './pages/aboutUs'
import React from 'react'
import Cards from './Components/Cards'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/" element={<Cards/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
