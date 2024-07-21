"use client";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <p className="text-base-bold text-sm">Collections:</p>
        <div className="flex gap-2 flex-wrap">
          {productInfo.collections.map((collection) => (
            <Link
              key={collection._id}
              href={`/collections/${collection._id}`}
              className="border text-grey-2 border-black px-2 py-1 rounded-lg text-sm cursor-pointer"
            >
              {collection.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <p className="text-base-bold  text-sm">Category:</p>
        <Link
          href={`/category/${productInfo.category}`}
          className="text-sm border text-grey-2 border-black px-2 py-1 rounded-lg cursor-pointer"
        >
          {productInfo.category}
        </Link>
      </div>

      <p className="text-heading3-bold">(Lek) {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>
      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}
      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="hover:text-red-1 cursor-pointer"
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            onClick={() => setQuantity(quantity + 1)}
            className="hover:text-red-1 cursor-pointer"
          />
        </div>
      </div>
      <button
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
        className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;
