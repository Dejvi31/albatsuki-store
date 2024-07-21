import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/actions/actions";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="py-8 px-5">
      <p className="text-heading1-bold text-center mb-8">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold text-center">No products found</p>
      ) : (
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {products.map((product: ProductType) => (
            <div key={product._id} className="flex justify-center items-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
