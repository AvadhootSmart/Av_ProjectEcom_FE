import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeroCard from "../components/HeroCard";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const [product, setproduct] = useState([{}]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setproduct(response.data);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden bg-[#23232f]">
        <ProductCard productData={product} />
      </div>
      <div
        id="Details"
        className="dets w-full h-screen overflow-hidden bg-[#23232f]"
      >
        <ProductDetails details={product} />
      </div>
    </>
  );
}

export default ProductPage;
