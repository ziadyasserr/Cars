import React from 'react'
import notfound from "../../assets/imges/notfound/notfound.png"

export default function NotFound() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center '>
    <img src={notfound} className='img-fluid' width={800}  alt="notfound" />
    </div>
    </>
  )
}
