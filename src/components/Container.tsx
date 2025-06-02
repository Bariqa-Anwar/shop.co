import Image from "next/image"

export default function Container (){
        return(
    <>
    <main>
                {/* container */}
                <div>
        <div className="overflow-x-hidden container flex-col bg-gray-100 rounded-3xl h-[800px] w-72 text-center mx-auto mt-12
        sm:w-96 md:w-[600px] md:h-[450px] md:flex-row-reverse lg:w-[850px] lg:h-[500px] xl:w-[1200px] xl:h-[630px] 
        overflow-y-hidden">
                <h1 className="font-extrabold text-3xl font-sans mx-2 pt-9 sm:mx-14 lg:text-4xl xl:text-5xl">
                BROWSE BY DRESS STYLE</h1>
        <div className="relative mt-6 xl:mt-9"> 
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-24 xl:ml-40 xl:text-xl">Casual</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-8 md:w-52 md:h-36 lg:h-44 lg:w-60 lg:ml-16 xl:h-56 xl:w-80 xl:ml-36"
                src="/images/casual.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-72 lg:ml-96 xl:text-xl xl:ml-[510px]">Formal</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:ml-64 md:w-80 md:h-36 md:-mt-40 lg:h-44 lg:w-[450px] lg:ml-80 lg:-mt-48
                xl:h-56 xl:w-[550px] xl:ml-[490px] xl:-mt-60"
                src="/images/formal.png"
                alt="dress"
                height={900} 
                width={1000}/>
        </div>
        <div className="relative mt-4">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 lg:ml-24 xl:ml-40 xl:text-xl">Party</h1>
                <Image className="h-36 w-64 mx-auto rounded-xl md:mr-64 md:w-80 lg:ml-16 lg:w-[450px] lg:h-44 xl:ml-36 xl:h-56 xl:w-[550px]"
                src="/images/party.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        <div className="relative mt-44">
                <h1 className="absolute mt-3 text-lg font-bold ml-12 sm:ml-20 md:ml-96 lg:ml-[560px] xl:text-xl xl:ml-[740px]">Gym</h1>
                <Image className="h-40 w-64 mx-auto -mt-40 rounded-xl md:ml-[360px] md:w-52 md:h-36 md:-mt-[320px] lg:ml-[530px] lg:h-44 lg:w-60 lg:-mt-[350px] xl:h-56 xl:w-80 xl:ml-[720px] xl:-mt-[395px]"
                src="/images/gym.png"
                alt="dress"
                height={700} 
                width={700}/>
        </div>
        </div>
        </div>
    </main>
    </>
        )
}