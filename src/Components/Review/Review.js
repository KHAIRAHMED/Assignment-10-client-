import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://desolate-fjord-92985.herokuapp.com/getProducts`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://desolate-fjord-92985.herokuapp.com/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Review;
