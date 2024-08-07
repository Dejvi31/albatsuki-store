"use client";
import useCart from "@/lib/hooks/useCart";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Cart = () => {
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));
  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>

        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-6 py-5 justify-between items-center max-sm:items-start ">
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    alt="cart"
                    className="rounded-lg w-32 h-32 object-cover"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">
                      (Lek) {cartItem.item.price}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    onClick={() =>
                      cartItem.quantity > 1 &&
                      cart.decreaseQuantity(cartItem.item._id)
                    }
                    className="hover:text-red-1 cursor-pointer"
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                    className="hover:text-red-1 cursor-pointer"
                  />
                </div>
                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Total Amount</span>
          <span>(Lek) {totalRounded}</span>
        </div>
        <p className="text-body-semibold  p-3 w-full">
          Ky eshte vetem nje website-katalog. Keshtu qe bejini screenshot kartes
          dhe dergojeni ne Instagram.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://instagram.com/albatsuki_animestore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-1 hover:text-black"
          >
            <FaInstagram size={32} />
            <span className="text-body-bold">Follow us on Instagram</span>
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.youtube.com/@Albatsuki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-1 hover:text-black"
          >
            <FaYoutube size={32} />
            <span className="text-body-bold">Subscribe to our YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
