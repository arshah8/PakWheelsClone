import Link from "next/link";
export default function From() {
  return (
    <div className="grid grid-col-12 grid-row-12 h-screen w-full bg-zinc-100">
            <div className="flex pt-12 justify-center h-[600px] pb-10 bg-zinc-100">
      <form className="bg-slate-50 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          Payment Form
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-3 text-gray-700 "
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone number">
            Phone Number
          </label>
          <input
            type="phone number"
            id="phone number"
            className="border rounded w-full py-2 px-3 text-gray-700 "
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone number">
           Bank Account Number
          </label>
          <input
            type="Bank Account Number"
            id="account number"
            className="border rounded w-full py-2 px-3 text-gray-700 "
          />
        </div>

        <div className="mb-6 mt-7">
          <Link href="/thankyou">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full">
            Pay Now
          </button>
          </Link>
        </div>

      </form>
    </div>
    </div>

  );
}
