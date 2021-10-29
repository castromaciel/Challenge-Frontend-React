import React from 'react'
import './imghero.css'

function ImgHero({img,name}) {
  return (
    <div className="mt-3 col-10 col-sm-10 col-md-12 col-lg-5">
      <img src={img} alt={name} className="img-hero" />
    </div>
  )
}

export default ImgHero
