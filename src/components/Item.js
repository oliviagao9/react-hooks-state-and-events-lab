import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState (true);

  function handleClick () {
    setAddToCart(!addToCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={"in-cart"} onClick = {handleClick}>{addToCart ? "Add to Cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
