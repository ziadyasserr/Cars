// import React from 'react'
export default function CardOfWork({ icon, title, description }) {
  return (
    <>
      <div className="col-md-4 col-12 d-flex flex-column align-items-center  my-3">
        <div>
          <img src={icon} alt={title} />
        </div>
        <div className={` text-center w-50`}>
          <span className="fw-bold mt-2 d-block">{title}</span>
          <span className="text-black-50">{description}</span>
        </div>
      </div>
    </>
  );
}
