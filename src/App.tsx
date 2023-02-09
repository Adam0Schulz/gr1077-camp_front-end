import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Events from 'pages/Events';
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { RegisterToEventPage } from "./pages/RegisterToEvent/RegisterToEventPage";
import Event from "./pages/Event/Event";
import NewEvent from 'pages/New Event/NewEvent';
import Participants from "./pages/Participants/Participants";
import Researchers from "./pages/Reseachers/Researchers";
import {Contact} from "./pages/Contact/Contact";
import {AboutPage} from "./pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path='/events/new' element={<NewEvent />} />
        <Route path="/events/:id" element={<><Event /></>} />
        <Route path="/events/:id/participants" element={<Participants/>}/>
        <Route path="/events/:id/register-to-event" element={<RegisterToEventPage />} />
        <Route path="/about" element={<> <AboutPage/></>} />
        <Route path="/researchers" element={<Researchers/>} />
        <Route path="/contact" element={<><Contact/></>} />
        <Route path="/blog" element={<><Navbar activePage='blog' /><Footer /></>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
