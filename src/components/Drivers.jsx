import data from '../data/data.json'

export default function Drivers() {

    const availableCount = data.filter(driver => driver.status === "available").length;

  return (
    <div className='w-full'>
          <div className='p-[10px]'>
       <table className="border-2 border-green-700 border-spacing-1.5 w-full text-center">
  <thead className="bg-green-200">
    <tr>
      <th className="border px-2 py-1">Driver Name</th>
      <th className="border px-2 py-1">Status</th>
      <th className="border px-2 py-1">Vehicle</th>
      <th className="border px-2 py-1">Location</th>
      <th className="border px-2 py-1">Next Shift</th>
      <th className="border px-2 py-1">Hours/Week</th>
      <th className="border px-2 py-1">Rating</th>
    </tr>
  </thead>
  <tbody>
    {data.map((p)=>(
       <tr key={p.id}>
      <td className="border px-2 py-1">{p.name}</td>
      <td className="border px-2 py-1">{p.status}</td>
      <td className="border px-2 py-1">{p.vehicle}</td>
      <td className="border px-2 py-1">{p.location}</td>
      <td className="border px-2 py-1">{p.nextShift}</td>
      <td className="border px-2 py-1">{p.hoursThisWeek}</td>
      <td className="border px-2 py-1">{p.rating}</td>
    </tr>
    ))}
  </tbody>
</table>

   <div style={{ padding: "20px" }}>
      <h2>Available Drivers: {availableCount}</h2>
    </div>



{/* <DriverForm/> */}
     </div>
    </div>
  )
}
