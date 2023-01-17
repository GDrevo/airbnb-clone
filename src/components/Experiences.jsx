import React from "react";
import Card from "./Card";
import data from "../data";
console.log(data)

export default function Experiences() {
  const cards = data.map(flat => {
    return (
      <Card
        img={flat.coverImg}
        rating={flat.stats.rating}
        reviewCount={flat.stats.reviewCount}
        location={flat.location}
        title={flat.title}
        price={flat.price}
      />
    )
  })

  return (
    <div className="card-list">
      {cards}
    </div>
  )
}
