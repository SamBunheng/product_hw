import React, { useEffect, useState } from "react";
import ProductCardComponent from "../components/Cards/ProductCardComponent";
import { BASE_URL } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";
import { LoadingComponent } from "../components/LoadingComponent";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL + "products");
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOnClickCard(product){
    navigate("/product-detail", {state: product})
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        products.map((product) => (
          <ProductCardComponent
            onClickCard={()=>handleOnClickCard(product)}
            key={product.id}
            image={product.images[0]}
            price={product.price}
            title={product.title}
          />
        ))
      )}
    </div>
  );
};

export default Product;
