import React, { Component } from 'react'
import'./Contact.css'
export default class Contact extends Component {
  render() {
    return <>
    

    <section className='my-5'>
    <div className="w-50 text-center m-auto">
            <div className="start text-uppercase color-star">contact</div>
            <div className="container-icon text-center">
              <div className="line1 color-line"></div>
              <div className="star color-star">
                <i className="fa-solid fa-star fa-2x"></i>
              </div>
              <div className="line2 color-line"></div>
            </div>
      </div>
      <div className='m-auto w-50  text-center'>
        <div className='name'><input className='form-control border-0 border-bottom my-1 p-4' type="text" required='required' data-validation-required-message='Please enter your name.' placeholder='Name' /></div>
        <div className='email'><input className='form-control border-0 border-bottom  my-1 p-4 ' type="email" required='required' data-validation-required-message='Please enter your email.' placeholder=' Email Address' /></div>
        <div className='phone'><input className='form-control border-0 border-bottom  my-1 p-4' type="text" required='required' data-validation-required-message='Please enter your phone number.' placeholder='Phone Number' /></div>
        <div className='number'><textarea className='form-control border-0 border-bottom  my-1 p-4' cols="1" required='required' data-validation-required-message='Please enter your masseage.' rows="5" placeholder='Masseage'></textarea></div>
        <div className='text-start '><button className='button-contact btn btn-outline-info btn-xl my-1'>send</button></div>
      </div>
      

    </section>


    
    </>
  }
}
