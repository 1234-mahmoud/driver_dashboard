import React from 'react'

export default function Customer() {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 p-4">
  <form className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col gap-5 w-full max-w-md">
    <label className="flex flex-col text-gray-700 font-semibold">
      Name:
      <input
        type="text"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    
    <label className="flex flex-col text-gray-700 font-semibold">
      Phone:
      <input
        type="text"
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Governorate:
      <select className="mt-1 p-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">-</option>
        <option value="Cairo">Cairo</option>
        <option value="Damietta">Damietta</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Aswan">Aswan</option>
      </select>
    </label>

   

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
