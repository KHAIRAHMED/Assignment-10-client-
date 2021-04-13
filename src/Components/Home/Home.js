import axios from "axios";
import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://desolate-fjord-92985.herokuapp.com/getProducts`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container-fluid">
      <div className="row d-flex justify-content-center">
        {products.map((product, index) => (
          <Event key={product._id} event={product}></Event>
        ))}
      </div>
    </section>
  );
};

export default Home;
