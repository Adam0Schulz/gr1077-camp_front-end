import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <BrowserRouter>
          <nav className="p-5 navbar navbar-expand-sm navbar-light bg-light">
              <div className="HorizontalLine1">
              <a className="navbar-brand" href="/">
                    <img alt="LogoNav" src={window.location.origin+/Photos/+"LogoNav.svg"}width="200" height="80" className="d-inline-block align-top"/>
              </a>
                  </div>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="HorizontalLine">

              <div className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                      <a className="nav-item nav-link " href="/home">HOME</a>
                      <a className="nav-item nav-link " href="/events">EVENTS</a>
                      <a className="nav-item nav-link " href="/about">ABOUT</a>
                      <a className="nav-item nav-link " href="/researchers">RESEARCHERS</a>
                      <a className="nav-item nav-link " href="/contact">CONTACT</a>
                      <a className="nav-item nav-link " href="/blog">BLOG</a>
                  </ul>
              </div>
    </div>

          </nav>
          <Routes>
              <Route  path="/" element={<><Footer/></>}/>
              <Route  path="/home" element={<><Footer/></>}/>
                <Route  path="/events" element={<><Footer/></>}/>
                <Route  path="/about" element={<><Footer/></>}/>
                <Route  path="/researchers" element={<><Footer/></>}/>
                <Route  path="/contact" element={<><Footer/></>}/>
                <Route  path="/blog" element={<><Footer/></>}/>
          </Routes>


          <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
