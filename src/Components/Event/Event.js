import React from "react";
import {Link } from "react-router-dom";

const Event = (props) => {
  const { image, title, price } = props.event;

  return (
    <div
      className="col-md-3"
      style={{ margin: "5px", padding: "5px", border: "1px solid lightGray" }}
    >
      <h5>{title}</h5>
      <img style={{ height: "300px" }} src={image} alt=""/>
      <div className="d-flex justify-content-between">
        <h4>{price}৳</h4>
        <Link to="/login">
              <button className="btn btn-success" >Buy Now</button>
          </Link>
      </div>
    </div>
  );
};

export default Event;
