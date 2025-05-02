import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./header.css";

import image from "../../assets/1000_F_464020785_w934aIST7IQCzp4XlgU1cWgpYLWYnUGb-removebg-preview.png"
import { Link } from "react-router-dom";

import { motion } from "framer-motion";



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
 

    return (
        <div>
            <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
                <div className="content">
                    <div className="logo">
                        <img src={image} alt="Logo"   />
                    </div>

                    <ul className="menu-list">
                        <div className="icon cancel-btn" onClick={toggleMenu}>
                            <li><i className="fas fa-times"></i></li>
                        </div>
                        <li><a href="/">Home</a></li>
                    
                     
                     
                        <li><a href="/pcos">Pcos</a></li>

                        <li><a href="/menopause">Menopause</a></li>
                        <li><a href="/minarche">Minarche</a></li>
                        <li><a href="/blogs">Write Blog</a></li>
                    </ul>
                    <div className="icon menu-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
            <div>
      

            </div>
        </div>
    );
}

export default Header;