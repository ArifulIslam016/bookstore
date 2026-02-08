import React from "react";
import { Link } from "react-router";

const ProductCard = () => {
  return (
    <div className="card mx-0 px-0 bg-base-100  shadow-sm">
      <figure>
        <img className="rounded-t-xl w-full" src="https://i.ibb.co.com/bR3q2zNj/farm.jpg" alt="Plant Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Crons</h2>
        <p>
          Breathing you and our upcoming genaration is out missing and
          vission{" "}
        </p>
        <div className="card-actions justify-end">
          <Link to="/detailedProducts" className="btn bg-green-400 text-white">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
