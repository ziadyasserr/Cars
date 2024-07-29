// import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import car2 from '../../assets/imges/landing-page/sec-5/audi1.png';

export default function CarDetails() {
  const [popularCar, setPopularCar] = useState([]);
  const { id } = useParams();

  let getPopularCars = async () => {
    try {
      let response = await axios.get(
        `https://freetestapi.com/api/v1/cars/${id}`,
      );
      setPopularCar(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularCars();
  }, [id]);

  let navigate = useNavigate();
  let goToHomePage = () => {
    navigate('/home');
  };
  let goToDetailsPage = () => {
    navigate('/popularcars');
  };
  return (
    <>
      <div className="container-fluid ">
        
        <ul className="list-unstyled d-flex gap-3 align-items-center maxMargin mt-4 ">
          <li>
            <button className="btn m-0 p-0 " onClick={goToHomePage}>
              <a href="">Home</a>
            </button>
          </li>
          <li>/</li>
          <li>
            <button className="btn m-0 p-0" onClick={goToDetailsPage}>
              <a href="">Cars</a>
            </button>
          </li>
          <li className="d-none d-md-block">/</li>
          <li className="p-0 m-0 d-none d-md-block">Car datails</li>
          <li>/</li>
          <li className="p-0 m-0 text-primary fw-bold fs-3">{`${popularCar.make} ${popularCar.model}`}</li>
        </ul>

        <div className="row mt-md-5">
          <div className="col-md-6 col-12 mt-md-5">
            <img src={car2} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div className="textCars ">
              <span className="text-uppercase">Car Details</span>
              <p className="fs-3 fw-bold my-3">{`${popularCar.make} / ${popularCar.model}`}</p>
            </div>

            <div className="d-flex align-items-center my-4  ">
              <i className="fa-solid fa-dollar-sign text-muted me-2 fs-5"></i>
              <span>price : {popularCar.price}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-regular fa-calendar text-muted me-2 fs-5"></i>
              <span>year : {popularCar.year}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-circle-info text-muted me-2 fs-5"></i>{' '}
              <span>engine : {popularCar.engine}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-truck-monster text-muted me-2 fs-5"></i>{' '}
              <span>transmission : {popularCar.transmission}</span>
            </div>
            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-horse-head text-muted me-2 fs-5"></i>{' '}
              <span>horsepower : {popularCar.horsepower}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-fan text-muted me-2 fs-5"></i>
              <span className="text-muted">Air condation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
