// components/Cars/Car/Car.jsx
import React from 'react';
import air from '../../../assets/imges/card/air.png';
import car3 from '../../../assets/imges/card/car3.png';
import frame from '../../../assets/imges/card/frame.png';
import star from '../../../assets/imges/card/star.png';
import passanger from '../../../assets/imges/card/user.png';
import Details from '../../Details/Details';
import styles from './Car.module.css';

export default function Car({ car }) {
  return (
    <>
      <div className={styles.card}>
        <div className="text-center mb-5">
          {car.image ? (
            <img src={car3} className=' w-75' alt="Default Car" />
          ) : (
            <img src={car.image} alt={`${car.make} ${car.model}`} />
          )}
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold fs-4">{`${car.make} ${car.model}`}</span>
          <span>
            <img src={star} alt="star" />
            4.6 <span>(1345 reviews)</span>
          </span>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="my-2">
              <span>
                <img src={passanger} alt="Passenger icon" />
              </span>
              <span>2Passengers</span>
            </div>
            <div>
              <span className="me-2">
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <span>{car.year}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="my-2">
              <span>
                <img src={air} alt="Air Conditioning icon" />
              </span>
              <span>AirConditioning</span>
            </div>

            <div>
              <span>
                <img src={frame} alt="Transmission icon" />
              </span>
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-between">
          <span>Price</span>
          <span className="fw-bold">${car.price}/day</span>
        </div>

        <Details carId={car.id} />
      </div>
    </>
  );
}
