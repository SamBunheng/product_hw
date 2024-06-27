import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAllProduct,
  fetchProducts,
} from "../redux/features/product/ProductSlide";
import { Product2Card } from "../components/Cards/Product2Card";

const Product2 = () => {
  const products = useSelector(selectAllProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold">Product 2</h1>
      <div className="max-w-screen-xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-20 mt-5">
      {products.map((product, index) => {
        return ( 
          <Product2Card
            key={index}
            image={product.image}
            title={product.name}
            price={product.price}
            desc = {product.desc}
            id={product.id}
            qty={1}
          ></Product2Card>
        );
      })}
      
      </div>
    </div>
  );
};

export default Product2;
