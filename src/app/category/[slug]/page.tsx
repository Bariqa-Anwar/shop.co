"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import {urlFor} from '@/sanity/lib/image'

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: { asset: { url: string } };
  category: string;
}

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product" && category == "${slug}"]`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [slug]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-lg text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug} Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-lg bg-white">
              <Link href={`/products/${product._id}`}>
                <Image
                  src={urlFor(product.image)}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-60 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-lg">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}