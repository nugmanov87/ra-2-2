import React from "react";
import ShopCard from "./ShopCard.js";

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map(o => (
        <ShopCard items={o} />
      ))}
    </div>
  );
}
