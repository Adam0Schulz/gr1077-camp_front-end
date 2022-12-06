import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Events from 'pages/Events';
import Navbar from "./components/Navbar";
import {Presenters} from "./features/Event/components/Presenters/Presenters";
import Home from "./pages/Home/Home";
import {RegisterToEventPage} from "./pages/RegisterToEvent/RegisterToEventPage";
import Event from "./pages/Event/Event";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/events" element={<Events />} />
        <Route  path="/events/:id" element={<><Navbar activePage='events'/><Event/><Footer/></>}/>
        <Route path="/about" element={<><Navbar activePage='about'/><Footer /></>} />
        <Route path="/researchers" element={<><Navbar activePage='researchers'/><Footer /></>} />
        <Route path="/contact" element={<><Navbar activePage='contact'/><Footer /></>} />
        <Route path="/blog" element={<><Navbar activePage='blog'/><Footer /></>} />
        <Route path="/registerToEvent" element={<RegisterToEventPage/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
