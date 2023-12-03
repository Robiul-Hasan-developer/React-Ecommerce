import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home/Home';
import Contact from './components/home/contact/Contact';

import ScrollToTop from './components/common/srollTop/ScrollToTop';
import ProductDetails from './pages/productDetails/ProductDetails';
import Sidebar from './components/common/sidebar/Sidebar';

function App() {

  return (
    <>
      <Sidebar/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}>  </Route>
              <Route path="/product/:id" element={<ProductDetails/>}>  </Route>
              <Route path="/contact" element={<Contact/>}>  </Route>
            </Routes> 
        </BrowserRouter>
      <ScrollToTop/>
    </>
  )
}

export default App
