import '../../App.css';
import man from '../../assets/imges/landing-page/sec-6/man.png';
import woman from '../../assets/imges/landing-page/sec-6/woman.png';

export default function Testimonials() {
  return (
    <>
      <div className="container mt-5">
        <div className="textCars text-center">
          <span className="text-uppercase">How it works</span>
          <p className="fw-bold mt-3 fs-1">Most popular car rental deals</p>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 mb-4">
            <div className="card flex-row">
              <img src={man} className="card-img-left" alt="Charlie Johnson" />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="h1">5.5</span> stars
                </h5>
                <div className="star-rating">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
                <p className="card-text mt-2">
                  “I feel very secure when using services. Your customer care
                  team is very enthusiastic and the driver is always on time.”
                </p>
                <p className="card-text">
                  <strong>Charlie Johnson</strong>
                </p>
                <p className="card-text text-muted">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="card flex-row">
              <img src={woman} className="card-img-left" alt="Jane Doe" />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="h1">5.5</span> stars
                </h5>
                <div className="star-rating">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
                <p className="card-text mt-2">
                  “I feel very secure when using services. Your customer care
                  team is very enthusiastic and the driver is always on time.”
                </p>
                <p className="card-text">
                  <strong>Jane Doe</strong>
                </p>
                <p className="card-text text-muted">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
