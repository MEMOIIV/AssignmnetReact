import React, { Component } from 'react'
import'./Footer.css' 
export default class Footer extends Component {
  render() {
    return <>
    
    <footer>
        <div className='row m-auto container-footer  text-center py-5 '>

        <div className='col-md-4 col-sm-12 pb-5'>
            <h4 className='text-white text-uppercase font-h4'>location</h4>
            <p className='text-white '>
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
            </p>
            
        </div>
        <div className='col-md-4 col-sm-12 pb-5'>
            <h4 className='pb-3 text-white text-uppercase font-h4 '> around the wep </h4>
            <span className='fa-brands-span'><i className="fa-brands fa-facebook-f"></i></span>
            <span className='fa-brands-span'><i className="fa-brands fa-twitter"></i></span>
            <span className='fa-brands-span'><i className="fa-brands fa-linkedin"></i></span>
            <span className='fa-brands-span'><i className="fa-solid fa-globe"></i></span>
        </div>
        <div className='col-md-4 col-sm-12 pb-5'>
            <h4 className='text-white text-uppercase font-h4'>about freelacer</h4>
            <p className='text-white'>
            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
            </p>
        </div>
        </div>
    </footer>
        <div className=' text-center text-white py-4 Copyright'>
            <small className='py-'>Copyright © Your Website 2021</small>
        </div>
    
    
    </>
  }
}
