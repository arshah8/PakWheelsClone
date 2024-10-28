import Link from "next/link";
import Image from "next/image";


export default function Feature() {
  return (
    <div className="grid grid-cols-12 grid-rows-8 bg-zinc-100 h-[600px] px-20">
      <div className="col-start-2 col-span-10 row-span-8">
        <div className="flex justify-start h-[90px] col-span-8 row-span-2">
          <h1 className="pt-8 text-slate-600 font-semibold text-2xl">
            Featured New Cars
          </h1>
        </div>
        <div className="flex text-slate-800 gap-16 text-lg col-span-8 h-12 row-span-2">
          <Link href="/popular">
            <p className="hover:font-semibold">Popular</p>
          </Link>
          <Link href="/up-coming">
            <p className="hover:font-semibold">Up Coming</p>
          </Link>
          <Link href="/newly-launched">
            <p className="hover:font-semibold">Newly Launched</p>
          </Link>
        </div>
        <div className="col-span-10 pb-4">
          <hr className="items-center border-t border-gray-300 w-full" />
        </div>

        <div className="flex col-span-5 gap-6 row-span-4 h-64 bg-zinc-100">
          <Link
            href="/Cars/Corolla"
            className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4">
            <div className="grid h-40 w-full">
              <Image
                src="/corolla.jpg"
                alt="Toyota Corolla"
                width={300}
                height={225}
                className=""
              />
            </div>
            <div className="text-center">
              <h1 className="text-blue-700 font-bold text-base pt-3">
                Toyota Corolla
              </h1>
            </div>
            <div className="text-center">
              <h1 className="text-green-500 font-normal text-sm">
                PKR 59.7 - 75.5 lacs
              </h1>
            </div>
          </Link>

          <Link
            href="/Cars/alto"
            className="flex hover:shadow-md flex-col bg-white h-75 w-60 col-span-1 row-span-4" >
            <div className="grid h-40 w-full">
              <Image
                src="/alto.png"
                alt="Suzuki Alto"
                width={300}
                height={225}
                className=""
              />
            </div>
            <div className="text-center">
              <h1 className="text-blue-700 font-bold text-base pt-3">
                Suzuki Alto
              </h1>
            </div>
            <div className="text-center">
              <h1 className="text-green-500 font-normal text-sm">
                PKR 23.3 - 30.5 lacs
              </h1>
            </div>
          </Link>

          <Link
            href="/Cars/Hondacity"
            className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4">
            <div className="grid h-40 w-full">
              <Image
                src="/city.jpg"
                alt="Honda City"
                width={300}
                height={225}
                className=""
              />
            </div>
            <div className="text-center">
              <h1 className="text-blue-700 font-bold text-base pt-3">
                Honda City
              </h1>
            </div>
            <div className="text-center">
              <h1 className="text-green-500 font-normal text-sm">
                PKR 46.5 - 58.5 lacs
              </h1>
            </div>
          </Link>

          <Link
            href="/Cars/hondacivic"
            className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4"  >
            <div className="grid h-40 w-full">
              <Image
                src="/civic.jpg"
                alt="Honda Civic"
                width={300}
                height={225}
                className=""
              />
            </div>
            <div className="text-center">
              <h1 className="text-blue-700 font-bold text-base pt-3">
                Honda Civic
              </h1>
            </div>
            <div className="text-center">
              <h1 className="text-green-500 font-normal text-sm">
                PKR 86.6 - 99.0 lacs
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
