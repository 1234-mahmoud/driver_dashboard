import React, { useState } from 'react'
import { useScheduler } from './SchedulerContext'

export default function DriverForm() {
  const { addDriver } = useScheduler()
  const [form, setForm] = useState({ name: '', age: '', phone: '', governorate: '', license: '', vehicle: '', status: 'off-duty' })

  const onSubmit = (e) => {
    e.preventDefault()
    if(!form.name || !form.vehicle){
      return
    }
    addDriver({
      name: form.name,
      vehicle: form.vehicle,
      location: form.governorate || 'Downtown Hub',
      status: form.status,
      nextShift: '',
    })
    setForm({ name: '', age: '', phone: '', governorate: '', license: '', vehicle: '', status: 'off-duty' })
  }
  return (
   <div className="w-full flex justify-center items-center bg-gray-100 p-4 max-sm:p-2">
  <form onSubmit={onSubmit} className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col gap-5 w-full max-w-md max-sm:p-4">
    <label className="flex flex-col text-gray-700 font-semibold">
      Name:
      <input
        type="text"
        value={form.name}
        onChange={(e)=>setForm({...form, name: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Age:
      <input
        type="number"
        value={form.age}
        onChange={(e)=>setForm({...form, age: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Phone:
      <input
        type="text"
        value={form.phone}
        onChange={(e)=>setForm({...form, phone: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Governorate:
      <select value={form.governorate} onChange={(e)=>setForm({...form, governorate: e.target.value})} className="mt-1 p-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">-</option>
        <option value="Cairo">Cairo</option>
        <option value="Damietta">Damietta</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Aswan">Aswan</option>
      </select>
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      License Number:
      <input
        type="text"
        value={form.license}
        onChange={(e)=>setForm({...form, license: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Vehicle:
      <input
        type="text"
        value={form.vehicle}
        onChange={(e)=>setForm({...form, vehicle: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Status:
      <select value={form.status} onChange={(e)=>setForm({...form, status: e.target.value})} className="mt-1 p-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="available">available</option>
        <option value="on-route">on-route</option>
        <option value="off-duty">off-duty</option>
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
