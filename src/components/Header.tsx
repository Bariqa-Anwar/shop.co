import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <>
        <main>
            <div className="overflow-x-hidden">
               <div className=" bg-customGray mt-3 text-left">
                  <h1 className="font-extrabold font-sans text-4xl pt-6 ml-7 sm:mx-28 md:mx-0 md:ml-11 md:mr-96 lg:ml-20
                   lg:mr-[580px] lg:pt-12 xl:ml-24 xl:mr-[640px] xl:text-6xl">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                 </h1>
                 <p className="mt-4 ml-7 mr-4 text-xs text-gray-500 font-sans sm:mx-28 md:mx-0 md:ml-12 md:mr-96 lg:ml-20 lg:mr-[500px]
                  xl:ml-24 xl:text-sm xl:mt-6 xl:mr-[700px]"> 
                    Browse through our diverse range of meticulously crafted garments, 
                    designed to bring out your individuality and cater to your sense of style.
                 </p>
                 <Link href="/productsListing">
                 <button className="border-black rounded-full bg-black text-white text-xs font-extrabold mx-8 mt-7 w-72 h-9 
                 sm:mx-40 sm:mt-8 md:mx-0 md:ml-12 md:w-40 md:font-light lg:text-sm lg:ml-20 xl:h-14 xl:w-56 ">
                Shop Now
                </button></Link>
                <h1 className="flex font-bold mt-6 ml-12 text-xl sm:ml-40 md:hidden">
                200+ 
                <hr className="border-l-2 border-gray-200 h-14 w-0 ml-[5rem] md:hidden">
                </hr>
                <p className="ml-6 font-bold text-xl sm:ml-3 md:hidden">2,000+</p>
                </h1>
                <p className="text-sm text-gray-500 font-sans ml-9 -mt-7 sm:ml-40 md:hidden">International Brands </p> 
                <p className="text-sm text-gray-500 font-sans ml-[12.7rem] -mt-5 sm:ml-80 md:hidden">High-Quality Products</p>
                <h1 className="font-bold text-xl ml-32 mt-5 sm:ml-64 md:hidden">30,000+</h1>
                <p className="font-sans text-sm text-gray-500 ml-32 sm:ml-64 md:hidden">Happy Customers</p>
                <Image className="absolute left-[17rem] mt-6 w-14 h-14 sm:ml-44 md:-mt-60 md:ml-[420px]
                lg:ml-[650px] lg:-mt-56 xl:ml-[920px] xl:h-20 xl:w-20 xl:-mt-80"
                src="/images/star.png" 
                alt="star icon" height={200} width={200}
                />
                <Image className="ml-10 mt-24 h-8 w-8 sm:ml-44 md:-mt-36 md:ml-[400px] lg:ml-[550px]
                xl:h-12 xl:w-12 xl:ml-[650px]"
                src="/images/star2.png" 
                alt="star icon" height={200} width={200}
                />
                <Image className="w-[250px] h-60 ml-14 -mt-28 sm:ml-44 md:ml-[430px] md:h-80 md:w-[35%]
                md:-mt-40 lg:-mt-40 lg:ml-[590px] lg:h-96 xl:h-[20%] xl:w-[40%] xl:-mt-72 xl:ml-[700px]"
                src="/images/main.png" 
                alt="couple model" height={500} width={700}
                />
                </div> 
                <div className="flex flex-wrap justify-center items-center gap-7 bg-black h-16 sm:h-16 sm:gap-9 lg:gap-24 xl:gap-32 
                xl:h-24">
                    <Image className="w-16 h-4 mt-2 sm:w-20 sm:mt-0 sm:h-5 xl:w-28 xl:h-8"
                    src="/images/versace.png"
                    alt="logo" height={700} width={700}
                    />
                    <Image className="w-16 h-4 mt-2 sm:mt-0 sm:h-5 sm:w-20 xl:w-28 xl:h-8"
                    src="/images/zara.png" 
                    alt="logo" height={700} width={700}
                    />
                    <Image className="w-16 h-4 mt-2 sm:mt-0 sm:h-5 sm:w-20 xl:w-28 xl:h-8"
                    src="/images/gucci.png" 
                    alt="logo" height={700} width={700}
                    />
                    <div className="flex gap-6 -mt-6 sm:mt-1">
                    <Image className="w-16 h-4 sm:h-5 sm:w-20 xl:w-28 xl:h-8"
                    src="/images/prada.png" 
                    alt="logo" height={700} width={700}
                    />
                    <Image className="w-20 h-4 sm:h-5 sm:w-24 lg:ml-10 xl:w-32 xl:h-8"
                    src="/images/calvin.png" 
                    alt="logo" height={700} width={700}
                    />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
