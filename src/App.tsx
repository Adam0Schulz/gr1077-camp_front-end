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
import Event from "./pages/Event/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar activePage='home'/><Footer /></>} />
        <Route path="/home" element={<><Navbar activePage='home'/><Footer /></>} />
        <Route path="/events" element={<Events />} />
        <Route  path="/events/:id" element={<><Navbar activePage='events'/><Presenters/><Footer/></>}/>
        <Route path="/about" element={<><Navbar activePage='about'/><Footer /></>} />
        <Route path="/researchers" element={<><Navbar activePage='researchers'/><Presenters/><Footer /></>} />
        <Route path="/contact" element={<><Navbar activePage='contact'/><Event/><Footer /></>} />
        <Route path="/blog" element={<><Navbar activePage='blog'/><Footer /></>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
