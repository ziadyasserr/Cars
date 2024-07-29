import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Search from '../Search/Search';
import PopularCar from './PopularCar/PopularCar';

export default function PopularCars() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/home');
  };

  const [popularCar, setPopularCar] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const getPopularCars = async () => {
    try {
      const response = await axios.get('https://freetestapi.com/api/v1/cars');
      setPopularCar(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularCars();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = popularCar.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(popularCar.length / itemsPerPage);

  return (
    <>
      <div className="container mt-4">
        <div>
          <ul className='list-unstyled d-flex align-items-center gap-3 mb-4'>
            <li>
              <button className="btn m-0 p-0" onClick={goToHome}>
                <a href="">Home</a>
              </button>
            </li>
            <li>/</li>
            <li>Cars</li>
          </ul>
        </div>
        <div className="textCars text-center">
          <span>Popular Rental Deals</span>
          <p className="fw-bold mt-3 fs-3">Most Popular Cars Rental Deals</p>
        </div>
        <div>
          <Search />
        </div>
        <div className="row mt-5">
          {currentPageData.map((item) => (
            <div key={item.id} className="col-12 col-lg-3 col-md-4 my-3">
              <PopularCar carProp={item} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
}
