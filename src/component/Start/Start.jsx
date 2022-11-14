import React, { Component } from 'react'
import './Start.css'
import img from './img/avataaars.svg'
import Navbar from '../Navbar/Navbar'
import Portfolio from "../Portfolio/Portfolio.jsx";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default class Start extends Component {

  render() {
    return <>
    <section className='bg-color-Start text-center'>
        <div className='img-Start mt-5 pt-5'>
            <img src={img} alt="img" />
            <div className='start text-uppercase'>start react</div>
           <div className='container-icon text-center'>
           <div className='line1'></div>
            <div className='star'><i className="fa-solid fa-star fa-2x"></i></div>
            <div className='line2'></div>
           </div>
            <p className='text-uppercase pragr'>graphic artist - web designer - illustrator</p>
        </div>
        
    </section>

       <Navbar/>
       <Portfolio/>
       <About/>
       <Contact/>
       <Footer/>
       
    
    </>
  }
}
