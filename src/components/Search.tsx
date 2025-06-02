// components/Search.tsx
"use client"; // Mark as a Client Component
import { useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = async (query: string) => {
    setQuery(query);

    if (query.length > 0) {
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const { products } = await response.json();
        setResults(products);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
          {results.map((product) => (
            <li key={product._id} className="p-2 hover:bg-gray-100">
              <Link href={`/products/${product._id}`} className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded-md mr-2"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;