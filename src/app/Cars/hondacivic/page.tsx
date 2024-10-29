import Image from "next/image";
import Link from "next/link";

export default function hondacity (){
    return(
        <div className="grid grid-col-12 grid-row-12  justify-center w-full h-screen bg-zinc-100">
            <div className="col-span-8 row-span-8 pt-12">
            <h1 className="font-bold text-3xl text-center text-black underline">Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            
            <div className=" row-span-8 col-span-8 pl-[500px] pt-7 ">
            <Image
             src="/civic.jpg"
             alt = "Honda Civic car in Red color"
             height={500}
             width= {350}
             className=""/>
            </div>

            <div className="flex flex-col-4 gap-5 justify-center">
            <div className="flex justify-center pt-10">
            <Link href="#" legacyBehavior>
              <button className="rounded-md bg-white border border-x-2 border-y-2  border-blue-800 h-10 w-32">
                <a className="justify-center text-black text-xs items-center">Book a test Drive</a>
              </button>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <Link href="#" legacyBehavior>
              <button className="rounded-md bg-white border border-x-2 border-y-2  border-blue-800 h-10 w-40">
                <a className="justify-center text-black text-xs items-center">Request Bank Finance</a>
              </button>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <Link href="#" legacyBehavior>
              <button className="rounded-md bg-white border border-x-2 border-y-2  border-blue-800 h-10 w-32">
                <a className="justify-center text-black text-xs items-center">Visit Place</a>
              </button>
            </Link>
          </div>

          <div className="flex justify-center pt-10">
            <Link href="#" legacyBehavior>
              <button className="rounded-md bg-white border border-x-2 border-y-2  border-blue-800 h-10 w-32">
                <a className="justify-center text-black text-xs items-center">Car Inspection</a>
              </button>
            </Link>
          </div>

            </div>
            <div className="col-span-8 row-span-4 px-28 pt-7">
            <p className="text-center text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit molestias minus? Minima nihil sunt quibusdam necessitatibus assumenda magnam dignissimos eum dolor, vero nostrum libero aliquam dolorem, voluptatem obcaecati animi.</p>
            </div>
            <div className="row-span-2 col-span-3">
                <h1 className=" text-center font-medium text-3xl pt-5 text-green-600">PKR 50,00,000</h1>
            </div>
            <div className="flex justify-center pt-4">
            <Link href="/Form" legacyBehavior>
              <button className="rounded-md bg-sky-700 h-10 w-32">
                <a className="justify-center text-white">Make Payment</a>
              </button>
            </Link>
          </div>
            </div>
        </div>
    )
    }