import React from 'react';
import { Meteors } from "@/Components/ui/meteors";

function Page() {
  return (
      <div className="relative h-auto md:h-screen w-full ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className=" relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden ">
<div className="mt-24 flex items-center justify-center">
  <div
    className="bg-gray-900 border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200"
  >
    <div
      className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
    >
      <h1 className='text-2xl text-white '>Contact</h1>
      <input
        className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
        placeholder="Email"
        type="email"
        name="email"
        id=""
      />
      <input
        className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
        placeholder="Password"
        type="password"
        name="password"
        id=""
      />
      <input
        className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
        type="submit"
        id=""
      />
      <p>
        Don't have an account?
        <a
          className="font-semibold text-white hover:text-blue-500 transition-all duration-200"
          href=""
          >Sign up</a>
      </p>
    </div>
  </div>
</div>

          <Meteors number={20} />
        </div>
    </div>
  );
}

export default Page;
