import React from "react";

export default function Card(props) {
  let badgeText
  if (props.flat.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  return (
    <div className="card">
      <img src={`${props.flat.coverImg}`} className="card--image" alt="flat" />
      {badgeText && <div className="badge-text">{badgeText}</div>}
      <div className="card--stats--up">
        <img src="star.png" className="card--star" alt="star" />
        <span>{props.flat.stats.rating}</span>
        <span className="gray">({props.flat.stats.reviewCount}) • </span>
        <span className="gray">{props.flat.location}</span>
      </div>
      <div className="card--stats--down">
        <h5>{props.flat.title}</h5>
        <p><span className="bold">From ${props.flat.price}</span> / person</p>
      </div>
    </div>
  )
}
