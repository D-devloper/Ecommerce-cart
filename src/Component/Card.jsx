import React from "react";

const Card = ({ item, addtoCart }) => {
  const { id, title, price, description, category, images } = item;
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={images[0]}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category.name}
          </h3>
          <h2 className="text-white title-font text-lg font-medium">{title}</h2>
          <p className="mt-1">${price}</p>
        </div>
        <button
          className="bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold p-1 rounded"
          onClick={() => addtoCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
