import { useMemo, useState } from 'react'
import { useScheduler } from './SchedulerContext'

export default function Drivers() {
    const { drivers } = useScheduler()
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('all')
    const filtered = useMemo(()=>{
      return drivers.filter(d =>
        d.name.toLowerCase().includes(search.toLowerCase()) && (status==='all' || d.status===status)
      )
    },[drivers, search, status])
    const availableCount = drivers.filter(driver => driver.status === "available").length;

  return (
    <div className='w-full h-screen'>
          <div className='p-[10px] max-sm:p-[5px]'>
      <div className='flex flex-wrap items-center gap-3 mb-3'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search drivers' className='px-2 py-1 border rounded'/>
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className='px-2 py-1 border rounded'>
          <option value='all'>All</option>
          <option value='available'>available</option>
          <option value='on-route'>on-route</option>
          <option value='off-duty'>off-duty</option>
        </select>
      </div>
      {/* Desktop/Tablet table */}
      <div className="overflow-x-auto hidden sm:block">
       <table className={`border-2 border-black/80 border-spacing-1.5 w-full text-center
         border-collapse min-w-[600px]
         `}>
  <thead className="bg-violet-600 text-white">
    <tr>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Driver Name</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Status</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Vehicle</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Location</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Next Shift</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Hours/Week</th>
      <th className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">Rating</th>
    </tr>
  </thead>
  <tbody>
    {filtered.map((p)=>(
       <tr key={p.id}>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.name}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.status}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.vehicle}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.location}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.nextShift}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.hoursThisWeek}</td>
      <td className="border px-2 py-1 max-sm:px-1 max-sm:py-1 max-sm:text-xs">{p.rating}</td>
    </tr>
    ))}
  </tbody>
</table>
       </div>

      {/* Mobile cards */}
      <div className="sm:hidden flex flex-col gap-3">
        {filtered.map((p)=> (
          <div key={p.id} className="rounded-lg bg-white border border-gray-200 p-3 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{p.name}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100">{p.status}</span>
            </div>
            <div className="text-sm text-gray-700 flex flex-col gap-1">
              <div><span className="text-gray-500">Vehicle:</span> {p.vehicle}</div>
              <div><span className="text-gray-500">Location:</span> {p.location}</div>
              <div><span className="text-gray-500">Next Shift:</span> {p.nextShift || 'N/A'}</div>
              <div className="flex justify-between"><span className="text-gray-500">Hours:</span> {p.hoursThisWeek} <span>⭐ {p.rating}</span></div>
            </div>
          </div>
        ))}
      </div>

   <div style={{ padding: "20px" }} className="max-sm:p-[10px]">
      <h2 className="max-sm:text-lg">Available Drivers: {availableCount}</h2>
    </div>



{/* <DriverForm/> */}
     </div>
    </div>
  )
}
