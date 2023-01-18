import React from "react";

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  return (
    <div className="card">
      <img src={`${props.coverImg}`} className="card--image" alt="flat" />
      {badgeText && <div className="badge-text">{badgeText}</div>}
      <div className="card--stats--up">
        <img src="star.png" className="card--star" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <div className="card--stats--down">
        <h5>{props.title}</h5>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}
