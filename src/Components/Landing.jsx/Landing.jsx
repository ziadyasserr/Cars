// import React from 'react'

import carimg from '../../assets/imges/landing-page/car21.png';
import frame from '../../assets/imges/landing-page/Frame.png';
import "../../App.css"

import styles from './Landing.module.css';

export default function Landing() {
  return (
    <>
      <div className="mt-3 mb-4 mb-md-0">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center ">
            <div className={`${styles.text}`}>
              <h1 className='fw-bold'>Find, book and rent a car <span className={styles.primaryColor}>Easily</span></h1>
              <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
            </div>
            <div>
              <div className=" position-relative">
                <img src={carimg} className="img-fluid car--animation" alt="carLanding" />
              </div>
              <div className={`${styles.positionImg}`}>
                <img src={frame} className="img-fluid" alt="frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
