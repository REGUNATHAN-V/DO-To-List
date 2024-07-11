import React from 'react';
import './footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const footer = () => {
    
  return (
    <footer className="footer">
        <div className="icon-bar">
            <a href=''><FaInstagramSquare /></a>
            <a href=''><FaFacebookSquare /></a>
            <a href=''><FaTwitter /></a>
        </div>
        <nav className="footer-nav">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
        </nav>
        <p>Copyright &copy; {new Date().getFullYear()}. Designed by Regu. </p>
    </footer>
  )
}

export default footer
