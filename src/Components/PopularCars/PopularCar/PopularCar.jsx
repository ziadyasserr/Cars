import air from '../../../assets/imges/card/air.png';
import car3 from '../../../assets/imges/card/car3.png';
import frame from '../../../assets/imges/card/frame.png';
import star from '../../../assets/imges/card/star.png';
import passanger from '../../../assets/imges/card/user.png';
import styles from '../../Cars/Car/Car.module.css';
import Details from '../../Details/Details';
export default function PopularCar({ carProp }) {
  return (
    <>
      <div className={styles.card}>
        <div className="text-center mb-5">
          {carProp.image ? (
            <img src={car3} className='w-75' alt="Default Car" />
          ) : (
            <img src={carProp.image} alt={`${carProp.make} ${carProp.model}`} />
          )}
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold fs-4">{`${carProp.make} ${carProp.model}`}</span>
          <span>
            <img src={star} alt="star" />
            4.6 <span>(1345 reviews)</span>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between my-2">
          <div>
            <span>
              <img src={passanger} alt="" />
            </span>
            <span>2 Passengers</span>
          </div>
          <div>
            <span>
              <img src={air} alt="" />
            </span>
            <span>Air Conditioning</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between my-3">
          <div>
            <span className='me-2'>
              <i className="fa-solid fa-calendar-days "></i>
            </span>
            <span>{carProp.year}</span>
          </div>
          <div>
            <span>
              <img src={frame} alt="" />
            </span>
            <span>{carProp.transmission}</span>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Price</span>
          <span className='fw-bold'>${carProp.price}/day</span>
        </div>
        <Details carId={carProp.id}/>
      </div>
    </>
  );
}
