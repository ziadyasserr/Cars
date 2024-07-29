// import React from 'react'
import audi1 from '../../assets/imges/landing-page/sec-5/audi1.png';
import chat from '../../assets/imges/landing-page/sec-5/chat.png';
import message from '../../assets/imges/landing-page/sec-5/message.png';
import user from '../../assets/imges/landing-page/sec-5/user.png';
import vector from '../../assets/imges/landing-page/sec-5/vector.png';
import styles from '../ChooseUs/ChooseUs.module.css';

export default function ChooseUs() {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div className="row">
            <div className="col-12 col-md-6 d-none d-md-block ">
              <div>
                <div>
                  <img src={audi1} className="img-fluid" alt="" />
                </div>
                <div className={styles.posimg}>
                  <img src={vector} className="img-fluid w-75" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className={`${styles.gapSec}`}>
                <div className={styles.textCars}>
                  <span className="text-uppercase">why choose us </span>
                  <p className="fw-bold fs-4 my-4">
                    We offer the best experience with our rental deals
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3 my-4">
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <span className="d-block fw-bold">
                      Best price guaranteed
                    </span>
                    <span>
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 my-4">
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <span className="d-block fw-bold">
                      24 hour car delivery
                    </span>
                    <span>
                      Book your car anytime and we will deliver it directly to
                      you.
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 my-4">
                  <div>
                    <img src={message} alt="" />
                  </div>
                  <div>
                    <span className="d-block fw-bold">
                      Best price guaranteed
                    </span>
                    <span>
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 my-4">
                  <div>
                    <img src={chat} alt="" />
                  </div>
                  <div>
                    <span className="d-block fw-bold">
                      24/7 technical support
                    </span>
                    <span>
                      Have a question? Contact Rentcars support any time when
                      you have problem.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
