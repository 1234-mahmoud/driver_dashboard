import data from '../data/data.json'

export default function Drivers() {

    const availableCount = data.filter(driver => driver.status === "available").length;

  return (
    <div className='w-full'>
          <div className='p-[10px] max-sm:p-[5px]'>
       <div className="overflow-x-auto">
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
    {data.map((p)=>(
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

   <div style={{ padding: "20px" }} className="max-sm:p-[10px]">
      <h2 className="max-sm:text-lg">Available Drivers: {availableCount}</h2>
    </div>



{/* <DriverForm/> */}
     </div>
    </div>
  )
}
