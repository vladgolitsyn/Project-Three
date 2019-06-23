import React from 'react';
import Developers from '../../components/Developers';
import About from '../../components/AboutUs';
import Footer from '../../components/Footer';
import "./style.css"

export default function index() {
    return (
        <div>
            <About/>
            <Developers/>
            <Footer />
        </div>
    )
}


