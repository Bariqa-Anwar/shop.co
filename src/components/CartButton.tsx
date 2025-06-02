"use client";
import { addToCart } from "@/app/actions/actions";
import React, { useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  inventory: number;
}

interface CartButtonProps {
  product: Product; // Accepts the whole product object
}

export default function CartButton({ product }: CartButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    await addToCart(product);
  };

  return (
    <button
    className="mt-4 bg-black text-white py-2 px-4 rounded-md"
      onClick={(e) => handleAddToCart (e, product)}
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}
