// import React from 'react'

export default function Search() {
  return (
    <>
      <div className="container">
        <div className="input-group ">
          <div className="input-group-text">
          <i className="fa-solid fa-location-dot"></i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary bg-primary text-light" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
