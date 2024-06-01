import React, { useEffect, useState } from "react";

const Cart = ({ cart, handleqty, handleremove }) => {
  const [tamnt, setTamnt] = useState(0);

  // console.log(cart)
  const totalamount = () => {
    let sum = 0;
    for (let i of cart) {
      sum = sum + i.qty * i.price;
    }
    setTamnt(sum);
  };
  useEffect(() => {
    totalamount();
  }, [cart]);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {cart?.map((item, index) => {
            const { id, title, price, description, category, images, qty } =
              item;
            return (
              <div className="lg:w-4/5 mx-auto flex flex-wrap" key={index}>
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {/* {category} */}
                  </h2>

                  <h1 className="text-white text-3xl title-font font-medium mb-4">
                    {title}
                  </h1>
                  <div className="flex mb-4">
                    <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                      Description
                    </a>
                    <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                      Reviews
                    </a>
                    <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                      Details
                    </a>
                  </div>
                  <p className="leading-relaxed mb-4">{description}</p>

                  <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                    <span className="text-gray-500">Quantity</span>
                    <span className="ml-auto text-white">4</span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">
                      {price}$
                    </span>
                    <div className=" ml-6 bg-indigo-500 font-bold text-xl text-white rounded">
                      <button
                        onClick={() => handleqty("+", index)}
                        className="p-2 "
                      >
                        +
                      </button>
                      <span className="p-2">{qty}</span>
                      <button
                        onClick={() => handleqty("-", index)}
                        className="p-2"
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <button
                        className="ml-6 p-3 bg-indigo-500   text-white rounded font-bold hover:bg-indigo-600"
                        onClick={() => handleremove(index)}
                      >
                        Remove
                      </button>
                    </div>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded font-bold">
                      Buy Now
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg: h-61 object-cover object-center rounded mt-4"
                  src={images[0]}
                />
              </div>
            );
          })}
        </div>
        <div className=" w-1/  h-12 text-center text-xl   text-white font-bold  border  border-x-4 border-white">
          <p className=" ">
            Total Amount: <span className="">{tamnt}$</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Cart;
