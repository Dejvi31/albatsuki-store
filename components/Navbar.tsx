"use client";
import useCart from "@/lib/hooks/useCart";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Category from "./Category";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const cart = useCart();
  const router = useRouter();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    setDropdownMenu(false);
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
      </Link>

      {/* Show category buttons directly on larger screens */}
      <div className="hidden lg:flex flex-grow justify-center">
        <Category handleCategoryClick={handleCategoryClick} />
      </div>
      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />{" "}
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>
      </div>
      <Menu
        className="cursor-pointer lg:hidden"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      />
      {dropdownMenu && (
        <div
          ref={dropdownRef}
          className={`fixed top-16 right-0 bg-white border rounded-lg shadow-lg p-4 w-60 z-20 lg:hidden transition-transform transform ${
            dropdownMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Category handleCategoryClick={handleCategoryClick} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
