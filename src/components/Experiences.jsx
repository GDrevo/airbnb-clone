import React from "react";
import Card from "./Card";
import data from "../data";
console.log(data)

export default function Experiences() {
  const cards = data.map(flat => {
    return (
      <Card
        key={flat.id}
        flat={flat}
      />
    )
  })

  return (
    <div className="card-list">
      {cards}
    </div>
  )
}
