import React from "react";
import ProductCard from "../Components/ProductCard";

const Products = () => {
       const arr=[1,2,3,4,5,6]
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-3xl text-black font-bold text-center my-6">
      Out Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {arr.map((a) => (
          <ProductCard></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
