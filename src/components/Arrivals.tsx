"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Selling from "../components/Selling";
import Container from "@/components/Container";
import Feedback from "./Feedback";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  discountPercent?: number;
  price: number;
  imageURL: string;
}

export default function Arrivals() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product" && new == true] | order(name asc){
          _id,
          name,
          discountPercent,
          price,
          "imageURL": image.asset->url
        }
      `;
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-white font-sans overflow-x-hidden">
        <div>
          {/* Arrival section */}
          <div className="font-extrabold text-center text-3xl lg:text-4xl lg:mt-8 xl:text-5xl">
            <h1 className="mt-8">NEW ARRIVALS</h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 lg:mx-2 xl:mx-8">
            {products.map((product) => (
              <div key={product._id} className="flex flex-col items-center ">
                {/* Product Image */}
                <Link href={`/products/${product._id}`}>
                  <Image
                    className="w-64 h-64 border rounded-xl object-cover"
                    src={product.imageURL}
                    alt={product.name}
                    height={900}
                    width={900}
                  />
                </Link>

                {/* Product Title */}
                <p className="text-sm font-bold mt-3 text-center md:text-base lg:text-lg">{product.name}</p>

                {/* Product Ratings */}
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <p key={i} className="text-yellow-400">★</p>
                  ))}
                  <p className="text-black text-sm ml-1">0/5</p>
                </div>

                {/* Product Price */}
                <div className="mt-2 text-center my-8">
                  <p className="font-bold text-lg">${product.price}</p>
                  {product.discountPercent && product.discountPercent > 0 ? (
                    <div className="flex items-center justify-center">
                      <s className="text-gray-400 mr-2">
                        $
                        {(
                          product.price /
                          (1 - (product.discountPercent || 0) / 100)
                        ).toFixed(2)}
                      </s>
                      <button className="border-red-200 rounded-full px-2 py-1 text-xs bg-red-200 text-red-700 font-extrabold">
                        -{product.discountPercent}%
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <Link href="/productsListing">
              <button className="border rounded-full bg-white text-black font-semibold px-6 py-2 hover:bg-black hover:text-white transition-colors">
                View All
              </button>
            </Link>
          </div>

          <hr className="mt-10 w-64 max-w-4xl mx-auto border-t border-gray-300" />
        </div>
      </div>

      {/* Selling Section Component */}
      <Selling />

      {/* Dress Container */}
      <Container />

      {/* Feedback Container */}
      <Feedback />
    </>
  );
}