import React, { Component } from 'react'
import'./About.css'
export default class About extends Component {
  render() {
    return <>

        <section className=' py-4 color-About'>
        <div className="w-50 text-center m-auto ">
            <div className="start text-uppercase ">about</div>
            <div className="container-icon text-center">
              <div className="line1 "></div>
              <div className="star ">
                <i className="fa-solid fa-star fa-2x"></i>
              </div>
              <div className="line2"></div>
            </div>
          </div>

          <div className='row justify-content-center contant-about m-auto  my-5'>
            <div className='col-lg-4'>
            <div className='contant pb-4   '><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
            <div className='col-lg-4'>
            <div className='contant pb-4 '><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
            </div>
          </div>
        </section>
    
    </>
  }
}
