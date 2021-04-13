import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("info", data);

    axios
      .post(`https://desolate-fjord-92985.herokuapp.com/addProducts`, data)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-8 pt-4">
          <div className="input-group  my-2">
            <label className="input-group-text" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">title is required</span>
            )}
          </div>

          <div className="input-group  my-2">
            <label className="input-group-text" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              className="form-control"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">price is required</span>
            )}
          </div>

          <div className="input-group  my-2">
            <label className="input-group-text" htmlFor="image">
              Image Link
            </label>
            <input
              type="text"
              placeholder="Enter Image Link"
              className="form-control"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-danger">title is required</span>
            )}
          </div>

          <input className="btn btn-success" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
