
import React, { Component } from "react";
import {Link} from'react-router-dom'
import'./Nav.css';
export default class Navbar extends Component {
  render() { 
        return <>
        <section className="navBar w-100 bg-color-nav">
                <nav className="navbar navbar-expand-lg m-auto pb-3 pt-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white text-uppercase" to="">
                    start react 
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5 ">
                        <li className="nav-item ps-4 ">
                        <Link className="nav-link active text-uppercase" aria-current="page" to="">
                            portfolio
                        </Link>
                        </li>
                        <li className="nav-item  ps-4 ">
                        <Link className="nav-link text-uppercase" to="">
                            about
                        </Link>
                        </li>
                        <li className="nav-item  ps-4 ">
                        <Link className="nav-link text-uppercase" to="">
                            contact
                        </Link>
                        </li>
                    
                    </ul>
                    </div>
                </div>
                </nav>
            </section>
            
            
      </>
    }
}
