import { RiRectangleFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="max-w-screen-2xl mx-auto mt-20">
        <div className="relative">
          {/* upper section */}
          <div className="relative flex flex-col lg:flex-row justify-between bg-black rounded-[20px] lg:rounded-xl  lg:w-[85%] px-5 md:mx-24 md:px-20 sm:px-10 sm:mx-10 mx-5 lg:px-12 py-7 lg:mx-24">
            <div>
              <h1 className="text-white lg:w-[60%] text-4xl font-extrabold mb-10 lg:mb-0">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </div>
            <div>
              <form className="flex rounded-full overflow-hidden">
                <button
                  className="px-2 py-2 bg-white text-zinc-400 flex items-center justify-center focus:outline-none"
                >
                  <RiRectangleFill className="text-lg" />
                </button>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="flex-grow text-left font-bold placeholder:text-zinc-400  py-2 focus:outline-none"
                />
              </form>
              <button className="bg-white text-black px-4 py-2 rounded-full w-full mt-3">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          {/* Lower section (main footer)*/}
          <div className="-mt-40 lg:-mt-20 pt-44 lg:pt-32 lg:px-20 bg-customGray bottom-0">
            <div className="flex-none lg:flex justify-around mb-10">
              <div className="px-4 sm:px-20 md:px-40 lg:px-0">
                <h1 className="text-4xl font-extrabold">
                SHOP.CO</h1>
                <p className="text-left lg:w-[50%] text-zinc-600  mt-5">
                  We have cloths that suits your style and which you&apos;re
                  proud to wear.From women to men.
                </p>
                <div className="flex gap-5 mt-6">
                  <FaTwitter className=" text-black bg-white rounded-full p-2 w-8 h-8 border hover:text-white hover:bg-black" />
                  <FaFacebookF className=" text-black bg-white rounded-full p-2 w-8 h-8 border hover:text-white hover:bg-black" />
                  <FaInstagram className=" text-black bg-white rounded-full p-2 w-8 h-8 border hover:text-white hover:bg-black" />
                  <FaGithub className=" text-black bg-white rounded-full p-2 w-8 h-8 border hover:text-white hover:bg-black" />
                </div>
              </div>
              <div className="grid grid-cols-2 px-4 sm:px-20 md:px-40 lg:px-0 pt-8 lg:pt-0  grid-row-2 lg:grid-cols-4 lg:grid-rows-1">
                <div className="lg:-ml-48">
                  <h1>COMPANY</h1>
                  <div className="flex flex-col gap-y-4 text-zinc-600 mt-5">
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Features</Link>
                    <Link href={"#"}>Works</Link>
                    <Link href={"#"}>Career</Link>
                  </div>
                </div>
                <div className="lg:-ml-40">
                  <h1>HELP</h1>
                  <div className="flex flex-col gap-y-4 text-zinc-600 mt-5">
                    <Link href={"#"}>Customer Support</Link>
                    <Link href={"#"}>Delivery Details</Link>
                    <Link href={"#"}>Terms & Conditions</Link>
                    <Link href={"#"}>Privacy Policy</Link>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0 lg:-ml-20">
                  <h1>FAQ</h1>
                  <div className="flex flex-col gap-y-4 text-zinc-600 mt-5">
                    <Link href={"#"}>Account</Link>
                    <Link href={"#"}>Manage Deliveries</Link>
                    <Link href={"#"}>Orders</Link>
                    <Link href={"#"}>Payments</Link>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0">
                  <h1>RESOURCES</h1>
                  <div className="flex flex-col gap-y-4 text-zinc-500 mt-5">
                    <Link href={"#"}>Free eBook</Link>
                    <Link href={"#"}>Development Tutorial</Link>
                    <Link href={"#"}>How to -Blog</Link>
                    <Link href={"#"}>Youtube Playlist</Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className="lg:mx-16" />
            <div className="flex sm:flex-row flex-col justify-between text-sm sm:text-lg sm:px-10 lg:px-16  mt-5 pb-20">
              <div>
                <p className="text-zinc-500 text-center sm:text-left">
                  Shop.co &copy; 2000-2023, All Rights Reserved
                </p>
              </div>
              <div className="flex gap-4 mt-5 sm:mt-0 justify-center">
                <RiVisaLine className="bg-white text-blue-600 w-12 h-8 rounded-md" />
                <RiMastercardFill className="text-orange-500 bg-white w-12 h-8 rounded-md" />
                <FaCcPaypal className="text-blue-400 w-12 h-8 rounded-md" />
                <FaApplePay className="text-black bg-white w-12 h-8 rounded-md" />
                <FaGooglePay className="text-black bg-white w-12 h-8 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}