
import Link from "next/link";

export default function ContentSection() {
    return (
        <div className="grid grid-cols-1  bg-white h-[400px] w-full">
            <div className="row-span-1 flex justify-center">
                <h1 className="text-gray-700 font-bold text-2xl  pt-10">
                    Sell Your Car on PakWheels and Get the Best Price
                </h1>
            </div>
            <div className="grid grid-cols-5 grid-rows-5 px-52 justify-center">
                <div className="col-span-2 row-span-4 border border-r-0 border-slate-300 rounded-sm p-4 ">
                    <h1 className="text-blue-900 font-semibold text-xl pt-4 pl-8">Post Your Ad on PakWheels</h1>
                    <div className="pt-3 pl-8">
                    <p className="text-slate-600">Post your Ad for Free in 3 Easy Steps</p>
                    <p className="text-slate-600">Get Genuine offers from Verified Buyers</p>
                    <p className="text-slate-600">Sell your car Fast at the Best Price
                    </p>
                    <div className="pt-6">
                    <button className="rounded-md bg-rose-700 h-12 w-52">
                            <Link href="#" legacyBehavior><a className="justify-center text-white">Post Your Ad</a></Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="  flex items-center pr-8 col-span-1 row-span-4 border border-r-0 border-l-0 border-slate-300 justify-center"><h1 className="bg-white  text-slate-500 text-2xl font-medium">OR</h1>
                 {/*  <hr className="items-center border-r border-gray-700 justify-center h-full" />*/}
                 </div>
                
                <div className="col-span-2 row-span-4 border border-l-0 border-slate-300 rounded-sm p-4 pr-8">
                    <h1 className="text-blue-900 font-semibold text-xl  pt-4">Try PakWheels Sell It For Me</h1>
                    <div className="pt-3">
                    <p className="text-slate-600">Dedicated Sales Expert to Sell your Car</p>
                    <p className="text-slate-600">We Bargain for you and share the Best Offer</p>
                    <p className="text-slate-600">We ensure Safe & Secure Transaction
                    </p>
                    <div className="pt-6">
                    <button className="rounded-md bg-blue-500 h-12 w-52">
                            <Link href="#" legacyBehavior><a className="justify-center text-white">Register Your Car</a></Link>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}