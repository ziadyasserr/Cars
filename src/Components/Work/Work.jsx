// import React from 'react';
import audi from '../../assets/imges/landing-page/audi.png';
import caricon from '../../assets/imges/landing-page/car-icon.png';
import jaguar from '../../assets/imges/landing-page/jaguar.png';
import location from '../../assets/imges/landing-page/location.png';
import nissan from '../../assets/imges/landing-page/nissan.png';
import volvo from '../../assets/imges/landing-page/volvo.png';
import CardOfWork from './CardOfWork/CardOfWork';
import "../../App.css"

export default function Work() {
  return (
    <>
      <div className="container mt-5">
        <div className="textCars text-center">
          <span className="text-uppercase">How it work</span>
          <p className="fw-bold mt-3 fs-1">Most popular cars rental deals</p>
        </div>

        <div className="row">
          <CardOfWork
            icon={location}
            title="Choose location"
            description="Choose your and find your best car"
          />
          <CardOfWork
            icon={caricon}
            title="Pick-up date"
            description="Select your pick up date and time to book your car"
          />
          <CardOfWork
            icon={location}
            title="Book your car"
            description="Book your car and we will deliver it directly to you"
          />
        </div>

        <div className="row mt-5  text-center">
          <div className="col-md-3 col-12  my-2">
            <img src={jaguar} alt="" />
          </div>
          <div className="col-md-3 col-12 my-2">
            <img src={nissan} alt="" />
          </div>
          <div className="col-md-3 col-12 my-2">
            <img src={volvo} alt="" />
          </div>
          <div className="col-md-3 col-12 my-2">
            <img src={audi} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
