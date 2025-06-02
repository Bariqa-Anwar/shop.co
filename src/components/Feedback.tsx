import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { FaCheckCircle } from "react-icons/fa";

export default function feedback (){
    return (
        <>
        <main>
        <div>
        <div className="mt-9 flex overflow-x-hidden overflow-y-hidden mx-8">
                <h1 className="font-sans font-extrabold text-2xl mx-5 sm:ml-36 md:ml-20 md:text-3xl lg:text-4xl lg:ml-24 xl:text-5xl">
                OUR HAPPY CUSTOMERS</h1>
                <ArrowLeft className="mt-10 mr-2 sm:mr-4 md:ml-28 lg:ml-64 xl:ml-[490px]"/>
                <ArrowRight className="mt-10 mr-4 sm:mr-16 "/>
        </div>
            {/* feedback 1 */}
        <div className="flex">
        <div className="container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
        <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
        </div>
        <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2">Sarah M.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
        </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans">
                {`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to 
                elegant dresses, every piece I've bought has exceeded my expectations."`}
            </p>
        </div>
            {/* feedback 2 */}
        <div className="hidden sm:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
        <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
        </div>
        <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2"> Alex K.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
        </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans">
                
                {`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of
                options they offer is truly remarkable, catering to a veriety of tastes and occasions."`}</p>
            </div>
            {/* feedback 2 */}
            <div className="hidden lg:block container border border-gray-200 rounded-2xl mt-5 h-48 w-72 mx-auto"> 
                <div className=" text-yellow-400 flex ml-8">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
                </div>
            <div className="flex">
            <h1 className="text-sm font-bold ml-8 mt-2">James L.</h1>
            <FaCheckCircle className="text-green-600 mt-2 ml-1" />
            </div>
            <p className="text-gray-600 text-sm mx-7 mt-1 font-sans xs:mx-6">
                {`"As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co.
                The selection of clothes is not only diverse but also on-point with the latest trends." `}
            </p>
            </div>
            </div>
            </div>
        </main>
        </>
    )
}