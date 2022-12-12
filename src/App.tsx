import React from 'react';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Events from "./pages/Events/index";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { RegisterToEventPage } from "./pages/RegisterToEvent/RegisterToEventPage";
import Event from "./pages/Event/Event";
import Participants from "./pages/Participants/Participants";
import {Contact} from "./pages/Contact/Contact";
//bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<><Event /></>} />
        <Route path="/about" element={<><Navbar activePage='about' /><Footer /></>} />
        <Route path="/researchers" element={<><Navbar activePage='researchers' /><Footer /></>} />
        <Route path="/contact" element={<><Contact/></>} />
        <Route path="/blog" element={<><Navbar activePage='blog' /><Footer /></>} />
        <Route path="/events/:id/register-to-event" element={<RegisterToEventPage />} />
        <Route path="/events/:id/participants" element={<Participants/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
