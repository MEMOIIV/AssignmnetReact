import React, { Component } from "react";
import imga from "./img/cabin.png";
import imgb from "./img/cake.png";
import imgc from "./img/circus.png";
import imgd from "./img/game.png";
import imge from "./img/safe.png";
import imgf from "./img/submarine.png";
import "./Portfolio.js";
import "./Portfolio.css";
export default class Portfolio extends Component {
  

  state = {
    click() {
      let img = document.querySelectorAll(".imgPortfolio");
      console.log(img);
      <div className="container-layer-Portfolio bg text-center position-relative bg-primary">
            <div className="layerPortfolio d-flex justify-content-center align-items-center">
              <div className="inner-layer-portfolio">
                <div className="w-50 text-center m-auto">
                  <div className="start text-uppercase color-star">portfolio</div>
                  <div className="container-icon text-center">
                    <div className="line1 color-line"></div>
                    <div className="star color-star">
                      <i className="fa-solid fa-star fa-2x"></i>
                    </div>
                    <div className="line2 color-line"></div>
                  </div>
                </div>
                <img className="w-50 pb-5" src={imga} alt="bbb" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
            inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos
            quod consequuntur itaque. Nam.
          </p>
          <div className="close-icon position-absolute ">
            <i className="fa-solid fa-xmark fa-2x"></i>
          </div>
          <div className="button-layer-close py-4">
            <button className="btn btn-outline-info text-capitalize"><i className="fa-solid fa-xmark fa-1x"></i> close window</button>
          </div>
              </div>
            </div>
          </div>
    },
    allImages: [
      { img1: imga },
      { img2: imgb },
      { img3: imgc },
      { img4: imgd },
      { img5: imge },
      { img6: imgf },
    ],
    name:[
      {nameImf1:"LOG CABIN"},
      {nameImf2:"TASTY CAKE"},
      {nameImf3:"CIRCUS TENT"},
      {nameImf4:"CONTROLLER"},
      {nameImf5:"LOCKED SAFE"},
      {nameImf6:"SUBMARINE"},
    ]
  };

  render() {
    return (
      <>
        <section className="m-auto w-100 text-center my-5">
          <div className="w-50 text-center m-auto">
            <div className="start text-uppercase color-star">portfolio</div>
            <div className="container-icon text-center">
              <div className="line1 color-line"></div>
              <div className="star color-star">
                <i className="fa-solid fa-star fa-2x"></i>
              </div>
              <div className="line2 color-line"></div>
            </div>
          </div>
          <div className="row img-portfolio m-auto g-5 w-75 ">
            <div className="col-lg-4 col-md-6">
              <figure>
                <img className="imgPortfolio" src={imga} alt="Portfolio" />
                <div onClick={this.state.click} className="layer1">
                  <i className="fa-solid fa-plus fa-3x"></i>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img className="imgPortfolio" src={imgb} alt="Portfolio" />
                <div className="layer1">
                  <i className="fa-solid fa-plus fa-3x"></i>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <figure>
                  <img className="imgPortfolio" src={imgc} alt="Portfolio" />
                  <div className="layer1">
                    <i className="fa-solid fa-plus fa-3x"></i>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <figure>
                  <img className="imgPortfolio" src={imgd} alt="Portfolio" />
                  <div className="layer1">
                    <i className="fa-solid fa-plus fa-3x"></i>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <figure>
                  <img className="imgPortfolio" src={imge} alt="Portfolio" />
                  <div className="layer1">
                    <i className="fa-solid fa-plus fa-3x"></i>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <figure>
                  <img className="imgPortfolio" src={imgf} alt="Portfolio" />
                  <div className="layer1">
                    <i className="fa-solid fa-plus fa-3x"></i>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        
      
      </>
    );
  }
}
