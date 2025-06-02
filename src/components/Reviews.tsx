import { FaStarHalf  } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

export default function Reviews (){
    return (
        <>
        <main>
            {/* Reviews section */}
                       <div>
                       <div className="flex gap-4 ml-12 mt-8 text-gray-500 font-normal text-sm sm:ml-32 sm:gap-14 md:ml-36 md:gap-28
                        lg:gap-56 lg:ml-32 lg:mt-24 xl:text-xl xl:ml-52">
                       <button className="hover:text-black hover:underline underline-offset-8">Product Details</button>
                       <button className="hover:text-black hover:underline underline-offset-8">Rating & Reviews</button>
                       <button className="hover:text-black hover:underline underline-offset-8">FAQs</button>
                       </div> 
                       <hr className="text-gray-400 w-[300px] mt-1 mx-auto sm:w-96 md:w-[600px] lg:ml-28 lg:w-[800px] xl:w-[1150px] 
                       xl:ml-16 xl:mt-0"></hr>
                       <div className="flex justify-between mx-9 sm:mx-28 md:mx-4 lg:mx-16">
                       <div className="flex gap-5 ml-4 mt-4 md:mx-16 lg:gap-0 lg:mx-0">
                        <h1 className="font-semibold text-lg md:text-xl lg:ml-6 xl:text-2xl xl:ml-9"> 
                            All Reviews</h1>
                        <h1 className="text-xs text-gray-400 -ml-4 mt-2 sm:mr-14 lg:absolute lg:left-56 xl:left-64 xl:mt-3">
                            {`(451)`}</h1>
                            </div>
                            <div className="flex gap-3 mt-4 xl:gap-9">
                       <button className=" border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-8
                       px-2 xl:h-10 xl:w-10"><HiAdjustments className="w-4 h-4 xl:w-5 xl:h-5"/></button>
                        <button className="hidden lg:block border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-24
                        text-sm py-1.5 pr-5 xl:h-10 xl:w-28 xl:pr-8 xl:text-base font-medium">
                            Latest
                            <RiArrowDropDownLine className="w-6 h-6 absolute right-52 -mt-5 lg:right-64 xl:right-[340px]"/>
                        </button>
                       <button className="text-xs border-gray-200 bg-gray-200 hover:bg-black hover:text-white rounded-full h-8 w-24
                       sm:w-28 lg:text-sm md:mr-20 lg:mr-16 xl:h-10 xl:w-40 xl:text-base">
                         Write a Review</button>
                       </div> 
                       </div>
                       {/* feedbacks containers */}
                       <div className="md:flex md:justify-around md:mx-8 xl:ml-16">
                       <div className="flex flex-col">
                       <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96
                        xl:w-[550px]">
                        {/* First feedback */}
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Samantha D.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3 xl:mt-4">
                        {`"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I 
                       appreciate the attention to detail. It's become my favorite go-to shirt."`}</p>
                       <p className="text-gray-700 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-6"> Posted on August 14, 2023</p>
                       </div>
                       {/* Second feedback */}
                       <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96 xl:w-[550px]">
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Alex M.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3">
                        {`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top notch. Being a UI/UX designer
                        myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`}</p>
                       <p className="text-gray-700 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 15, 2023</p>
                       </div>
                       {/* Third feedback */}
                       <div className="container border border-gray-200 rounded-2xl mt-5 h-52 w-72 mx-auto sm:w-96 md:w-72 md:h-56 lg:w-96 
                       xl:w-[550px]">
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Ethan R.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3">
                        {`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my
                        eye, and the fit is perfect. I can see the designer's touch in every aspect of this t-shirt."`}</p>
                       <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 16, 2023</p>
                       </div>
                       </div>
                       {/* Fourth feedback */}
                       <div className="flex flex-col xl:mr-20">
                       <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Olivia P.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3">
                        {`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but
                        also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`}</p>
                       <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-3 lg:mt-12 xl:mt-9"> Posted on August 17, 2023</p>
                       </div>
                       {/* Fifth feedback */}
                       <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Liam K.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3">
                        {`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's
                        skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`}</p>
                       <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-8 lg:mt-12 xl:mt-9"> Posted on August 18, 2023</p>
                       </div>
                       {/* Sixth feedback */}
                       <div className="hidden md:block container border border-gray-200 rounded-2xl mt-5 h-56 w-72 mx-auto lg:w-96 xl:w-[550px]">
                       <div className="text-yellow-500 flex ml-4 mt-4 xl:mt-9">
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStarHalf />
                       </div>
                       <div className="flex ml-4 mt-2"> 
                        <h1 className="font-bold xl:text-lg"> Ava H.</h1>
                        <FaCheckCircle className="text-green-600 ml-2 mt-1"/>
                       </div>
                       <p className="text-gray-500 text-sm font-sans ml-3">
                        {`"I'm not just wearing a t-shirt; I'm wearning a piece of design philosophy. The intricate details and thoughtful layout
                        of the design make this t-shirt a conversation starter."`}</p>
                       <p className="text-gray-600 text-sm mt-4 ml-3 md:mt-[52px] xl:mt-14"> Posted on August 19, 2023</p>
                       </div>
                       </div>
                       </div>
                       </div>
                       
                       {/* Review button */}
                       <button className="border rounded-full bg-white text-black font-semibold text-sm w-48 h-10 ml-20 mt-5 sm:ml-56 md:ml-72 
                       lg:ml-[420px] xl:ml-[540px]">
                        Load More Reviews</button>
        </main>
        </>
    )
}