
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-12  grid-rows-12 justify-start bg-black">
        <div className="col-span-12 row-span-12 h-[420px] bg-gradient-to-b from-black  to-sky-900 pl-3  w-full">
          <div>
            <div>
              <h1 className=" flex justify-center items-center text-center font-medium text-4xl text-white pt-36">
                Find Used Cars in Pakistan
              </h1>
              <p className="flex justify-center items-center text-center text-lg">
                With thousands of cars, we have just the right one for you
              </p>
      
            </div>
          
          <div className="col-span-5 col-start-4 mt-8 w-[650px] ml-[340px] justify-center">
      
          <div className="flex items-center rounded-lg ">
      <input
        type="text"
        placeholder="Search..."
        className="  rounded-lg rounded-r-none py-[9px] px-4 w-full bg-zinc-50 text-black outline-none"
         />
     <button className="bg-green-500 hover:bg-green-700 text-white rounded-lg pr-4 rounded-l-none p-[11px] w-14">
        <Image
          src="/search.png" 
          alt="Search"
          width={20}
          height={20}
          className=""
        />
      </button>
    </div>
      
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
