"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  new: boolean;
  colors: string[];
  sizes: string[];
}

export default function DetailProducts4() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"][0..3] {
          _id,
          name,
          price,
          description,
          "imageUrl": image.asset->url,
          category,
          discountPercent,
          new,
          colors,
          sizes
        }`;
        const products: Product[] = await client.fetch(query);
        setProducts(products);
      } catch (err) {
        setError('Failed to fetch products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <main>
      <div>
        <h1 className="font-extrabold text-3xl font-sans mt-8 mx-20 ml-24 sm:ml-36 md:ml-48 md:text-4xl lg:text-5xl lg:mx-60 xl:mx-96">
          YOU MIGHT ALSO LIKE
        </h1>
        <div className="flex flex-col px-20 mt-9 sm:justify-center sm:gap-7 lg:gap-8 xl:gap-12 xl:mr-7">
          {products.map((product) => (
            <Link href={`/products/${product._id}`} key={product._id}>
              <div>
                <Image
                  className="w-48 h-48 border rounded-xl sm:w-44 sm:h-40 md:w-52 md:h-52 xl:h-60 xl:w-60 xl:ml-0"
                  src={product.imageUrl}
                  alt={product.name}
                  height={800}
                  width={800}
                />
                <h1 className="font-bold text-base mt-3 sm:ml-32 md:text-base md:ml-40 lg:text-lg lg:gap-6 lg:mx-0 xl:gap-12 xl:ml-16">
                  {product.name}
                </h1>
                <div className="flex text-yellow-500 mt-2 sm:ml-32 md:ml-40 lg:ml-10 lg:gap-1 xl:ml-28">
                  {[1, 2, 3, 4].map((star) => (
                    <FaStar key={star} className="size-3 md:size-4" />
                  ))}
                  <p className="text-black text-xs ml-1 md:text-sm">4.0/</p>
                  <p className="text-gray-400 text-xs md:text-sm">5</p>
                </div>
                <div className="flex font-bold text-lg mb-4 lg:text-lg">
                  <p>${product.price}</p>
                  {product.discountPercent && (
                    <>
                      <s className="text-gray-400 ml-1">
                        ${product.price + (product.price * product.discountPercent) / 100}
                      </s>
                      <button className="border-red-200 rounded-full w-12 h-5 text-xs bg-red-100 text-red-800 font-bold mt-1 ml-2">
                        -{product.discountPercent}%
                      </button>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}