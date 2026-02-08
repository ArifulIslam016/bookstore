import React from "react";
import { useNavigate } from "react-router";

const DetailedProduct = () => {
    const navigator=useNavigate()
  return (
    <div className="max-w-[1440px] mx-auto mt-8">
      <div className="card mx-0 px-0 bg-base-100  shadow-sm">
        <figure>
          <img className="rounded-t-3xl w-full h-20 sm:h-30  md:h-50 lg:h-60 cover " src="https://i.ibb.co.com/bR3q2zNj/farm.jpg" alt="Plant Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Crons</h2>
          <p>
            Breathing you and our upcoming genaration is out missing and
            vission{" "}
          </p>
        </div>
      <button onClick={()=>navigator(-1)} className="btn w-10 btn-outline mx-auto my-5 md:px-20" >Back</button>
      </div>
    </div>
  );
};

export default DetailedProduct;
