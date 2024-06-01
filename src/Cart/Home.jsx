import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
const Home = ({ addtoCart }) => {
  const [products, setproducts] = useState();

  const getAlldata = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = res.json();
    data.then((result) => {
      setproducts(result);
      // setproducts(data);
      // console.log(data);
    });
  };
  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products?.map((item, index) => {
              item["qty"] = 1;
              return <Card item={item} key={index} addtoCart={addtoCart} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
