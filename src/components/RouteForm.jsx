import React, { useState } from 'react'
import { useScheduler } from './SchedulerContext'
import RouteMap from './RouteMap'

export default function RouteForm() {
  const { addRoute, drivers } = useScheduler()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [form, setForm] = useState({ date: '', startTime: '', endTime: '', title: '', assignedDriverId: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    if(!from || !to || !form.date || !form.startTime || !form.endTime || !form.title){
      return
    }
    addRoute({
      title: form.title,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      from,
      to,
      assignedDriverId: form.assignedDriverId ? parseInt(form.assignedDriverId) : null,
    })
    setFrom('')
    setTo('')
    setForm({ date: '', startTime: '', endTime: '', title: '', assignedDriverId: '' })
  }
  return (
   <div className="w-full h-lvh flex justify-center items-center bg-gray-100 p-4 max-sm:p-2">
  <form onSubmit={onSubmit} className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col gap-5 w-full max-w-2xl max-sm:p-4">
  <h1 className={`font-bold text-xl max-sm:text-lg`}>Enter Your Path</h1>
    <label className="flex flex-col text-gray-700 font-semibold">
     From:
      <input
        type="search"
        value={from}
        onChange={(e)=>setFrom(e.target.value)}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    
    <label className="flex flex-col text-gray-700 font-semibold">
      To:
      <input
        type="search"
        value={to}
        onChange={(e)=>setTo(e.target.value)}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

     <label className="flex flex-col text-gray-700 font-semibold">
      Date
      <input
        type="date"
        value={form.date}
        onChange={(e)=>setForm({...form, date: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

<div className={`w-full flex items-center gap-[10px] 
  max-sm:flex-col
  `}>
    <label className="w-full flex flex-col text-gray-700 font-semibold">
      Start Time:
      <input
        type="time"
        value={form.startTime}
        onChange={(e)=>setForm({...form, startTime: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

     <label className="w-full flex flex-col text-gray-700 font-semibold">
     End Time:
      <input
        type="time"
        value={form.endTime}
        onChange={(e)=>setForm({...form, endTime: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

</div>

   <label className="flex flex-col text-gray-700 font-semibold">
      Route Title:
      <input
        type="text"
        value={form.title}
        onChange={(e)=>setForm({...form, title: e.target.value})}
        className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-100"
      />
    </label>

    <label className="flex flex-col text-gray-700 font-semibold">
      Assign Driver (optional):
      <select value={form.assignedDriverId} onChange={(e)=>setForm({...form, assignedDriverId: e.target.value})} className="mt-1 p-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">Unassigned</option>
        {drivers.map(d => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
    </label>

    <div className='flex items-center gap-[15px]'>
      <div className="img">
          <img src="location.svg" alt=""  className="w-[var(--icon-width)] h-[var(--icon-height)]"/>
      </div>
      <span>Select Your Location From Map</span>
    </div>

    <RouteMap from={from} to={to} setFrom={setFrom} setTo={setTo} />

   

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
