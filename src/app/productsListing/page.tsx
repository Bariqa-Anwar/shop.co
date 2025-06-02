"use client"; 
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Ellipsis } from "lucide-react";
import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define the Product interface
interface Product {
  _id: string;
  _type: "product";
  name: string;
  price: number;
  description: string;
  imageUrl: string; // Updated to use imageUrl directly
  category: "tshirt" | "short" | "jeans" | "hoodie" | "shirt";
  discountPercent?: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}

export default function Casual() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"][0..8] {
          _id,
          name,
          price,
          description,
          "imageUrl": image.asset->url, // Fetch image URL directly
          category,
          discountPercent,
          new,
          colors,
          sizes
        }`;
        const products = await client.fetch<Product[]>(query);
        setProducts(products);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <main className="overflow-x-hidden overflow-y-hidden max-w-screen-2xl mx-auto">
        <hr className="w-[20.7rem] ml-6 mx-auto mt-2 sm:w-[37.7rem] sm:ml-3 md:w-[44rem] md:ml-6 lg:w-[56rem] lg:ml-[5rem] xl:w-[70rem] xl:ml-[6rem]"></hr>

        {/* Filter section for small screens */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-8 ml-[20.4rem] mt-8 sm:ml-[580px] md:ml-[43rem] lg:hidden">
                <HiMiniAdjustmentsVertical className="size-5 ml-1.5" />
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-white h-screen rounded-t-xl">
              <h1 className="font-bold text-lg -mt-4">Filters</h1>
              <hr className="w-72 mx-auto mt-1 sm:w-[37rem] md:w-[45rem]"></hr>
              <div className="flex justify-between mt-2">
                <p className="text-slate-600 text-sm">T-shirts</p>
                <MdChevronRight className="text-gray-600 size-5 -mr-3" />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-slate-600 text-sm">Shorts</p>
                <MdChevronRight className="text-gray-600 size-5 -mr-3" />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-slate-600 text-sm">Shirts</p>
                <MdChevronRight className="text-gray-600 size-5 -mr-3" />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-slate-600 text-sm">Hoodie</p>
                <MdChevronRight className="text-gray-600 size-5 -mr-3" />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-slate-600 text-sm">Jeans</p>
                <MdChevronRight className="text-gray-600 size-5 -mr-3" />
              </div>
              <hr className="w-72 mx-auto mt-2 sm:w-[37rem] md:w-[45rem]"></hr>
              <div className="flex justify-between mt-1">
                <h1 className="text-lg font-bold">Price</h1>
                <FaAngleUp className="size-5 -mr-2" />
              </div>
              <div className="flex flex-col justify-center items-center min-h-screen bg-white">
                <div className="w-56 -mt-[30rem] sm:w-96">
                  <Slider min={50} max={200} step={10} />
                </div>
              </div>
              <hr className="w-72 mx-auto -mt-[30rem] sm:w-[37rem] md:w-[45rem]"></hr>
              <div className="flex justify-between mt-1">
                <h1 className="text-lg font-bold">Colors</h1>
                <FaAngleUp className="size-5 -mr-2" />
              </div>
              <div className="grid grid-cols-5 mx-2 gap-y-1 ml-7 sm:ml-12 md:ml-14">
                <FaCircle className="size-8 text-green-500" />
                <FaCircle className="size-8 text-red-600" />
                <FaCircle className="size-8 text-yellow-400" />
                <FaCircle className="size-8 text-orange-600" />
                <FaCircle className="size-8 text-sky-400" />
                <FaCircleCheck className="size-8 text-blue-800" />
                <FaCircle className="size-8 text-purple-700" />
                <FaCircle className="size-8 text-pink-500" />
                <FaCircle className="size-8 text-white border border-slate-300 rounded-full" />
                <FaCircle className="size-8 text-black" />
              </div>
              <hr className="w-72 mx-auto mt-2 sm:w-[37rem] md:w-[45rem]"></hr>
              <div className="flex justify-between mt-1">
                <h1 className="text-lg font-bold">Size</h1>
                <FaAngleUp className="size-5" />
              </div>
              <div className="grid grid-cols-3 mt-1 gap-y-1.5 ml-5 sm:ml-6">
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  X-Small
                </button>
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  Small
                </button>
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  Medium
                </button>
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  Large
                </button>
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  X-Large
                </button>
                <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20 sm:w-36 md:w-44">
                  XX-Large
                </button>
              </div>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-xs h-9 w-48 mt-2 ml-16 sm:w-80 sm:ml-[8.5rem] md:ml-[10rem] md:w-96">
                Apply Filter
              </button>
            </SheetContent>
          </Sheet>
        </div>

        {/* the page */}
        <div className="flex ml-6 text-sm font-light -mt-14 lg:mt-3 lg:ml-20 xl:ml-24">
          <Link href="/">
            <h1 className="text-slate-600">Home</h1>
          </Link>
          <MdOutlineChevronRight className="size-4 text-slate-700 mt-0.5" />
          <h1>Casual</h1>
        </div>

        {/* Filter section for large screens */}
        <div className="lg:flex">
          <div className="hidden lg:block container border border-gray-200 rounded-2xl w-56 h-[1080px] mt-5 ml-20 xl:w-64 xl:ml-24">
            {/* Filters content */}
            <div className="flex justify-between mt-2 mx-3">
              <h1 className="font-bold text-lg">Filters</h1>
              <HiMiniAdjustmentsVertical className="size-5 mt-1 text-gray-500" />
            </div>
            <hr className="w-44 mx-auto mt-4 xl:w-56"></hr>
            <div className="flex justify-between mt-4 mx-3 font-light">
              <p className="text-gray-500 text-sm">T-shirts</p>
              <MdChevronRight className="text-gray-500 size-5" />
            </div>
            <div className="flex justify-between mt-3 mx-3 font-light">
              <p className="text-gray-500 text-sm">Shorts</p>
              <MdChevronRight className="text-gray-500 size-5" />
            </div>
            <div className="flex justify-between mt-3 mx-3 font-light">
              <p className="text-gray-500 text-sm">Shirts</p>
              <MdChevronRight className="text-gray-500 size-5" />
            </div>
            <div className="flex justify-between mt-3 mx-3 font-light">
              <p className="text-gray-500 text-sm">Hoodie</p>
              <MdChevronRight className="text-gray-500 size-5" />
            </div>
            <div className="flex justify-between mt-3 mx-3 font-light">
              <p className="text-gray-500 text-sm">Jeans</p>
              <MdChevronRight className="text-gray-500 size-5" />
            </div>
            <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
            <div className="flex justify-between mt-3 mx-3">
              <h1 className="text-lg font-bold">Price</h1>
              <FaAngleUp className="size-5" />
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen bg-white">
              <div className="w-40 -mt-[28rem] mr-4 xl:-mt-[35rem]">
                <Slider min={50} max={200} step={10} />
              </div>
            </div>
            <hr className="w-44 mx-auto -mt-[28rem] xl:-mt-[35rem] xl:w-56"></hr>
            <div className="flex justify-between mt-3 mx-3">
              <h1 className="text-lg font-bold">Colors</h1>
              <FaAngleUp className="size-5" />
            </div>
            <div className="grid grid-cols-5 gap-x-0.5 mt-3 mx-3 gap-y-2">
              <FaCircle className="size-8 text-green-500" />
              <FaCircle className="size-8 text-red-600" />
              <FaCircle className="size-8 text-yellow-400" />
              <FaCircle className="size-8 text-orange-600" />
              <FaCircle className="size-8 text-sky-400" />
              <FaCircleCheck className="size-8 text-blue-800" />
              <FaCircle className="size-8 text-purple-700" />
              <FaCircle className="size-8 text-pink-500" />
              <FaCircle className="size-8 text-white border border-slate-300 rounded-full" />
              <FaCircle className="size-8 text-black" />
            </div>
            <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
            <div className="flex justify-between mt-3 mx-3">
              <h1 className="text-lg font-bold">Size</h1>
              <FaAngleUp className="size-5" />
            </div>
            <div className="grid grid-cols-2 mt-3 mx-3 gap-y-2 xl:mx-4 xl:gap-x-2">
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                XX-Small
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                X-Small
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                Small
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                Medium
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                Large
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                X-Large
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                XX-Large
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                3X-Large
              </button>
              <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-9 w-20">
                4X-Large
              </button>
            </div>
            <hr className="w-44 mx-auto mt-5 xl:w-56"></hr>
            <div className="flex mt-2">
              <h1 className="text-lg font-bold lg:ml-3">Dress Style</h1>
              <FaAngleUp className="size-5 mt-1 ml-12 lg:ml-[5rem] xl:ml-[105px]" />
            </div>
            <div className="flex justify-between mt-4 mx-3 font-light">
              <p className="text-slate-600 text-base">Casual</p>
              <MdChevronRight className="text-gray-600 size-5" />
            </div>
            <div className="flex justify-between mt-4 mx-3 font-light">
              <p className="text-slate-600 text-base">Formal</p>
              <MdChevronRight className="text-gray-600 size-5" />
            </div>
            <div className="flex justify-between mt-4 mx-3 font-light">
              <p className="text-slate-600 text-base">Party</p>
              <MdChevronRight className="text-gray-600 size-5" />
            </div>
            <div className="flex justify-between mt-4 mx-3 font-light">
              <p className="text-slate-600 text-base">Gym</p>
              <MdChevronRight className="text-gray-600 size-5" />
            </div>
            <button className="border-gray-200 text-gray-500 bg-gray-200 hover:bg-black hover:text-white rounded-full text-xs h-10 w-44 mx-3 mt-5 xl:w-52 xl:h-11">
              Apply Filter
            </button>
          </div>

          {/* Casual dresses on right side (large screens) */}
          <div>
            <div className="flex gap-2 ml-6 mt-1">
              <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl lg:ml-1 xl:ml-2">Casual</h1>
              <p className="text-xs mt-2 font-light sm:mt-3 lg:text-sm text-gray-500 lg:ml-36 xl:ml-[22rem]">
                Showing 1-10 of 100 Products
              </p>
              <p className="hidden lg:block font-light text-sm ml-4 text-gray-500 mt-3">Sort by:</p>
              <p className="hidden lg:block font-medium text-sm mt-3">Most Popular</p>
              <FaAngleDown className="hidden lg:block mt-4 size-4 xl:-ml-1" />
            </div>

            {/* Display fetched products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 mt-5">
              {products.map((product) => (
                <div key={product._id} className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <Link href={`/products/${product._id}`}>
                  <Image
                    src={product.imageUrl || ""} // Use imageUrl directly
                    alt={product.name}
                    width={900}
                    height={900}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  </Link>

                  {/* Product Title */}
                  <h2 className="text-lg font-semibold mt-2">{product.name}</h2>

                  {/* Product Rating */}
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`size-4 ${
                          star <= 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.5)</span>
                  </div>

                  {/* Product Price */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xl font-bold">${product.price}</p>
                    {product.discountPercent && product.discountPercent > 0 && (
                     <p className="text-sm text-red-600">-{product.discountPercent}%</p>
                     )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <hr className="w-[20.8rem] mx-auto mt-4 sm:w-[36.9rem] sm:mr-6 md:w-[44.9rem] lg:w-[41.6rem] lg:ml-6 xl:w-[51rem]"></hr>
            <div className="flex gap-2 mt-2 text-sm xs:gap-5 smCustom:gap-6 smCustom:ml-3 sm:gap-4 sm:ml-3 md:gap-4 lg:gap-3">
              <Link href="/detail">
                <button className="w-[4.99rem] h-8 border border-gray-200 bg-white hover:bg-gray-200 hover:text-black text-black rounded-lg flex items-center ml-4 lg:w-[5.5rem] lg:h-9 lg:ml-3">
                  <HiOutlineArrowSmLeft className="size-4 lg:ml-1" />
                  Previous
                </button>
              </Link>
              <button className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8 ml-7 sm:ml-9 md:ml-24 lg:ml-20 xl:ml-36">
                1
              </button>
              <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                2
              </button>
              <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                3
              </button>
              <Ellipsis className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-10 size-1" />
              <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                8
              </button>
              <button className="hidden sm:block hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                9
              </button>
              <button className="hover:bg-gray-200 bg-white text-gray-500 rounded-lg h-8 w-8">
                10
              </button>
              <Link href="/detail">
                <button className="border border-gray-200 hover:bg-gray-200 bg-white rounded-lg h-8 w-14 ml-8 pr-4 sm:ml-14 md:ml-[7.7rem] lg:ml-[6.5rem] lg:w-16 lg:h-9 xl:ml-[11.9rem]">
                  Next
                  <HiOutlineArrowSmRight className="size-4 ml-9 -mt-4 lg:-mt-[17px] lg:ml-10" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}