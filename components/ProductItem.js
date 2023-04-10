/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col justify-center p-5">
        <div className="flex justify-between">
          <div>
            <Link href={`/product/${product.slug}`}>
              <h2 className="text-lg">{product.name}</h2>
            </Link>
            <p className="mb-2">{product.brand}</p>
          </div>
          <p className="ml-1 ">{product.price}Birr</p>
        </div>

        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
