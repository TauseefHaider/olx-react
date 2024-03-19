import React from "react";

export default function Card(props) {
  const product = props.product;
  return (
    <div className="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
      <img
        className="object-cover rounded-lg h-[200px]"
        width="300px"
        src={product.img}
        alt=""
      />
      <div className="p-3">
        <div className="flex justify-between py-2">
          <span>RS {product.price}</span>
          <span className="material-symbols-outlined"> favorite </span>
        </div>
        <p className="py-3">{product.name}</p>
        <p className="text-xs">{product.address}</p>
      </div>
    </div>
  );
}
