import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

interface Props {
    activePage: 'home' | 'events' | 'about' | 'researchers' | 'contact' | 'blog'
}

const Navbar = ({activePage}: Props) => {
    return (
        <div className="navbar navbar-expand-sm navbar-light">
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
                        <a className={"nav-item nav-link " + (activePage == 'home' ? 'active' : '')} href="/home">HOME</a>
                        <a className={"nav-item nav-link " + (activePage == 'events' ? 'active' : '')} href="/events">EVENTS</a>
                        <a className={"nav-item nav-link " + (activePage == 'about' ? 'active' : '')} href="/about">ABOUT</a>
                        <a className={"nav-item nav-link " + (activePage == 'researchers' ? 'active' : '')} href="/researchers">RESEARCHERS</a>
                        <a className={"nav-item nav-link " + (activePage == 'contact' ? 'active' : '')} href="/contact">CONTACT</a>
                        <a className={"nav-item nav-link " + (activePage == 'blog' ? 'active' : '')} href="/blog">BLOG</a>
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default Navbar;