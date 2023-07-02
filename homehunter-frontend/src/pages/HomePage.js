import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeImage from '../assets/images/perfectHome01.png'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
        <Navbar />    
        <div className="home-container">
            <div className="home-text">
                <h1>Welcome to HomeHunter</h1>
                <p>We help you find your perfect home.</p>
            </div>
            <div className="home-image">
                <img src={homeImage} alt="Home" />
            </div>
        </div>
        <Footer />
        </div>      
    );
};

export default HomePage;
