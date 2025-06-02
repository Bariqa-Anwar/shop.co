"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  ChevronDown,
  SearchIcon,
  ShoppingCart,
  CircleUserRound,
  AlignJustify,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
}

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim()) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }
      try {
        const response = await fetch(`/api/search?query=${query}`);
        const { products } = await response.json();
        setSuggestions(products);
        setShowSuggestions(products.length > 0);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setShowSuggestions(false);
      }
    };
    fetchSuggestions();
  }, [query]);

  return (
    <nav className="relative z-50 max-w-screen-2xl mx-auto">
      <div className="bg-black flex justify-between items-center text-white text-xs font-extralight h-9 w-screen py-3 sm:text-sm px-4 sm:px-6 lg:px-8">
        <h1 className="ml-2 sm:ml-6 md:ml-12 lg:ml-20 xl:ml-48 ">
          Sign up and get 20% off your first order!
        </h1>
        <button className="text-xs font-light hover:underline sm:text-sm">
          Sign Up Now
        </button>
        <X className="hidden sm:block h-5 w-4 cursor-pointer xl:mr-3" />
      </div>

      <div className="flex items-center justify-between py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
        {/* Sidebar Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent className="bg-customGray text-lg font-medium">
              <ul className="mt-12">
                <li>
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between w-full hover:underline"
                  >
                    Shop <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="mt-2 pl-4 text-sm">
                      <li><Link href="/category/shirt">Shirts</Link></li>
                      <li><Link href="/category/tshirt">T-Shirts</Link></li>
                      <li><Link href="/category/jeans">Jeans</Link></li>
                      <li><Link href="/category/hoodie">Hoodies</Link></li>
                      <li><Link href="/category/short">Shorts</Link></li>
                    </ul>
                  )}
                </li>
                <li className="mt-6"><Link href="/">On Sale</Link></li>
                <li className="mt-6"><Link href="/">New Arrivals</Link></li>
                <li className="mt-6"><Link href="/">Brands</Link></li>
                <li className="mt-6">
                  <SignedOut>
                    <Link href="/sign-in">Sign In</Link>
                  </SignedOut>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo & Shop Heading */}
        <div className="flex space-x-0 lg:space-x-6">
          <h1 className="text-2xl font-extrabold">SHOP.CO</h1>

          {/* Shop with Dropdown on Large Screens */}
          <div className="hidden lg:flex items-center relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center font-medium text-lg hover:underline"
            >
              Shop <ChevronDown className="ml-1 w-5 h-5 md:ml-2" />
            </button>

            {/* Dropdown for Large Screens */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-60 bg-white border border-gray-300 rounded-md shadow-lg p-2 w-44 text-gray-700">
                <li className="p-2 hover:bg-gray-100">
                  <Link href="/category/shirt">Shirts</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link href="/category/tshirt">T-Shirts</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link href="/category/jeans">Jeans</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link href="/category/hoodie">Hoodies</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link href="/category/short">Shorts</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Navbar Links for Large Screens */}
        <div className="hidden lg:flex space-x-8">
          <Link href="/">On Sale</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Brands</Link>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:block relative flex-1 max-w-md sm:flex items-center mx-4 lg:mx-8">
          <SearchIcon className="absolute left-2 text-gray-500 mt-2 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-200 rounded-full shadow-sm placeholder-gray-500 bg-gray-200 focus:outline-none focus:ring focus:ring-indigo-100 w-full h-9 pl-10 pr-4"
          />
          {/* Display search suggestions */}
          {showSuggestions && query && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-lg mt-72 max-h-60 overflow-y-auto z-50">
              {suggestions.map((product) => (
                <li key={product._id} className="hover:bg-gray-100 ">
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center p-3"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={30}
                      height={30}
                      className="rounded-md mr-3"
                    />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart & User Icons */}
        <div className="flex items-center space-x-2 sm:space-x-6">
          <Link href="/wishlist">
           <FaHeart className="size-5"/>
           </Link>
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" />
          </Link>
          <div className="hidden md:block">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">Sign In</Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}