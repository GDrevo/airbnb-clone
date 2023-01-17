import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.img}`} className="card--image" alt="flat" />
      <div className="card--stats--up">
        <img src="star.png" className="card--star" alt="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <div className="card--stats--down">
        <h5>{props.title}</h5>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}
