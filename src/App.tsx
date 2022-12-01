import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Events from 'pages/Events';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <BrowserRouter>

          <Routes>
              <Route  path="/" element={<><Navbar/><Footer/></>}/>
              <Route  path="/home" element={<><Navbar/><Footer/></>}/>
                <Route  path="/events" element={<><Navbar/><Events/><Footer/></>}/>
                <Route  path="/about" element={<><Navbar/><Footer/></>}/>
                <Route  path="/researchers" element={<><Navbar/><Footer/></>}/>
                <Route  path="/contact" element={<><Navbar/><Footer/></>}/>
                <Route  path="/blog" element={<><Navbar/><Footer/></>}/>
          </Routes>

          <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
