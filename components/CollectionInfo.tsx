"use client";
import React from "react";
import ProductCard from "./ProductCard";

const CollectionInfo = ({
  collectionDetails,
}: {
  collectionDetails: CollectionType & { products: ProductType[] }; // Update the type here
}) => {
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">{collectionDetails.title}</p>
      {!collectionDetails.products ||
      collectionDetails.products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap mx-auto gap-16 justify-center">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionInfo;
