import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FaStarHalf  } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Reviews from "@/components/Reviews";
import DetailProducts4 from "@/components/DetailProducts4";

export default function Detail(){
    return (
        <>
        <div className="overflow-x-hidden overflow-y-hidden max-w-screen-2xl mx-auto">
            <hr className="text-gray-500 mt-2 w-auto mx-auto"></hr>
            <div className="flex gap-1 text-gray-500 text-xs font-sans mt-5 ml-6 sm:ml-32 md:ml-6 lg:ml-20 xl:ml-24 xl:text-base">
                <Link href="/"><p>Home</p></Link>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                <p>Shop</p>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                <p>Men</p>
                <ChevronRight className="h-3.5 w-3.5 mt-0.5 xl:mt-1.5"/>
                T-Shirts
            </div>
            <div className="lg:flex">
            {/* left section on lg screen*/}
           <div>
            {/* for big image */}
            <div>
                <Image className="h-72 w-72 mt-5 mx-auto sm:w-96 sm:h-96 lg:ml-52 xl:h-[470px] xl:w-[450px] xl:mt-7 xl:ml-64"
                src="/images/cartlg.png"
                alt="shirt" height={800} width={800} />
            </div>
            {/* for small images */}
            <div className="flex gap-4 mt-3 ml-12 sm:ml-32 sm:gap-6 md:ml-48 lg:flex lg:flex-col lg:ml-20
            lg:-mt-96 xl:-mt-[465px] xl:gap-3 xl:ml-24">
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart1.png"
                alt="shirt" height={800} width={800}
                />
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart2.png"
                alt="shirt" height={800} width={800}
                />
                <Image className="w-20 h-20 sm:h-28 sm:w-28 xl:h-36 xl:w-36"
                src="/images/cart3.png"
                alt="shirt" height={800} width={800}
                />
            </div>
            </div>
            {/* item's detail (right section on lg screen )*/}
            <div>
                <h1 className="font-extrabold font-sans mt-2 mx-12 text-2xl sm:ml-32 md:ml-48 lg:ml-[13.6rem] lg:text-3xl xl:text-4xl
                xl:ml-60">
                    ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="text-yellow-500 flex ml-12 mt-2 sm:ml-32 md:ml-48 lg:mt-1 lg:ml-[13.6rem] xl:ml-60">
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStar className="xl:size-6"/>
                <FaStarHalf className="xl:size-6"/>
                <p className="text-black text-sm ml-1 xl:text-lg">4.5/</p>
                <p className="text-gray-400 text-sm xl:text-lg">5</p>
            </div>
                <div className="flex ml-12 text-xl mt-2 font-bold sm:ml-32 md:ml-48 lg:mt-1 lg:ml-[13.6rem] xl:ml-60 xl:text-2xl">
                <p>$260</p>
                <s className="text-gray-400 ml-2">$300</s>
                <button className="border-red-200 rounded-full w-10 h-5 text-xs bg-red-100 text-red-700 ml-2 mt-1 
                font-normal xl:text-sm xl:h-6 xl:w-14">-40%
                </button>
                </div>
                <p className="text-gray-600 text-sm font-sans font-normal mx-10 ml-12 mt-2 sm:mx-32 md:ml-48 lg:ml-[13.6rem] lg:mt-1 xl:mx-60">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and a breathable fabric, it offers
                    superior comfort and style.</p>
                <hr className="text-gray-400 w-[300px] mt-3 mx-auto sm:w-96 lg:ml-[13.6rem] xl:w-[530px] xl:ml-60"></hr>
                <p className="text-sm text-gray-600 font-sans ml-12 mt-3 sm:ml-32 md:ml-48 lg:mt-1 lg:ml-[13.6rem] xl:ml-60"> 
                    Select Colors </p>
                <div className="flex gap-1 ml-12 mt-3 sm:ml-32 md:ml-48 lg:mt-1 lg:ml-[13.6rem] xl:ml-60">
                <FaCircleCheck className="text-olive size-8"/>
                <RiCheckboxBlankCircleFill className="text-green-950 size-9"/>
                <RiCheckboxBlankCircleFill className="text-blue-950 size-9"/>
                </div>
                <hr className="text-gray-400 w-[300px] mt-3 mx-auto sm:w-96 lg:ml-[13.6rem] lg:mt-2 xl:w-[530px] xl:ml-60"></hr>
                <p className="text-sm text-gray-600 font-sans ml-12 mt-4 sm:ml-32 md:ml-48 lg:mt-2 lg:ml-[13.6rem] xl:ml-60">
                    Choose Size</p>
                <div className="flex gap-1 text-sm font-sans text-gray-700 mt-3 ml-12 sm:ml-32 sm:gap-6 md:ml-52
                lg:ml-[13.6rem] lg:gap-2 xl:ml-60">
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-16
                lg:w-20 xl:h-9">
                    Small</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20
                lg:w-20 xl:h-9">
                    Medium</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-16
                lg:w-20 xl:h-9">
                    Large</button>
                <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-8 w-20
                lg:w-20 xl:h-9">
                        X-Large</button>
                </div>
                <hr className="text-gray-400 w-[300px] mt-7 mx-auto sm:w-96 lg:ml-[13.6rem] xl:w-[530px] xl:ml-60"></hr>
           <div className="flex gap-4 sm:gap-20 lg:gap-6">
           <div className="mt-4 ml-12 sm:ml-32 md:ml-48 lg:ml-[13.6rem] xl:ml-60">
            <button className="border-gray-200 flex items-center justify-center gap-3 bg-gray-200 hover:bg-black hover:text-white
             rounded-full text-sm h-9 w-20 px-1 lg:w-28 lg:gap-6 xl:h-11 xl:w-32 xl:text-lg">
            <FiMinus/>1<FaPlus /></button>
            </div>
            <div>
                <Link href="/cart">
            <button className="border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full text-sm h-10 w-48 mt-4
            lg:w-56 xl:h-11 xl:w-96 xl:text-lg">
            Add to Cart</button></Link>
           </div>
           </div>
           </div>
           </div>
           </div>

        {/* Reviews Section */}
        <Reviews/>

        {/* More Products section */}
        <DetailProducts4 />
        </>
    )
}