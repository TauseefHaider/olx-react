import React from "react";

export default function Card(props) {
  const product = props.product;
  return (
    <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
      <img
        class="object-cover rounded-lg h-[200px]"
        width="300px"
        src={product.img}
        alt=""
      />
      <div class="p-3">
        <div class="flex justify-between py-2">
          <span>RS {product.price}</span>
          <span class="material-symbols-outlined"> favorite </span>
        </div>
        <p class="py-3">{product.name}</p>
        <p class="text-xs">{product.address}</p>
      </div>
    </div>
  );
}
