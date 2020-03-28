import React from "react";
import ShopItem from "./ShopItem.js";

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map(o => (
        <ShopItem items={o} />
      ))}
    </div>
  );
}
