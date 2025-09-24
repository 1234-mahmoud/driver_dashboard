import React from 'react'

export default function RouteForm() {
  return (
   <div className="w-full h-lvh flex justify-center items-center bg-gray-100 p-4">
  <form className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col gap-5 w-full max-w-md">
  <h1 className={`font-bold text-xl`}>Enter Your Path</h1>
    <label className="flex flex-col text-gray-700 font-semibold">
     From:
      <input
        type="search"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    
    <label className="flex flex-col text-gray-700 font-semibold">
      To:
      <input
        type="Search"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

     <label className="flex flex-col text-gray-700 font-semibold">
      Date
      <input
        type="date"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

<div className={`w-full flex items-center gap-[10px] `}>
    <label className="w-full flex flex-col text-gray-700 font-semibold">
      Start Time:
      <input
        type="time"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

     <label className="w-full flex flex-col text-gray-700 font-semibold">
     End Time:
      <input
        type="time"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

</div>





   <div className='flex items-center gap-[15px]'>
    <div className="img">
        <img src="location.svg" alt=""  className="w-[var(--icon-width)] h-[var(--icon-height)]"/>
    </div>
    <span>Select Your Location From Map</span>
   </div>

   

    <button
      type="submit"
      className="mt-4 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </form>
</div>

  )
}
