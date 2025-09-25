import { useScheduler } from "./SchedulerContext";
export default function Dashboard() {
  const { drivers, routes } = useScheduler();
  const availableCount = drivers.filter(
    (driver) => driver.status === "available"
  ).length;


  const onroute = drivers.filter((driver) => driver.status === "on-route").length;
  return (
    <div className="w-full bg-gray-100">
      <div
        className={`bar h-[50px] bg-blue-400
        flex justify-center items-center 
        text-white font-bold text-2xl
        max-sm:text-xl
        `}
      >
        Drivers Scheduling Dashbord
      </div>

      <div
        className={`my-[50px] w-full p-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] max-sm:p-[15px]`}
      >
        <div
          className={`flex justify-between items-center 
            bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl
            `}
        >
          <div className={`flex flex-col`}>
            <span>Total Drivers</span>
            <span className="text-2xl font-bold">{drivers.length}</span>
          </div>

          <img
            src="user2.svg"
            alt=""
            className="w-[var(--icon-width)] h-[var(--icon-height)]"
          />
        </div>

        <div
          className={`flex justify-between items-center 
            bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl`}
        >
          <div className={`flex flex-col`}>
            <span>Available Drivers</span>
            <span className="text-2xl font-bold">{availableCount}</span>
          </div>

          <img
            src="done.svg"
            alt=""
            className="w-[var(--icon-width)] h-[var(--icon-height)]"
          />
        </div>

        <div
          className={`flex justify-between items-center 
            bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-xl`}
        >
          <div className={`flex flex-col`}>
            <span>On Route</span>
            <span className="text-2xl font-bold">{onroute}</span>
          </div>

          <img
            src="time.svg"
            alt=""
            className="w-[var(--icon-width)] h-[var(--icon-height)]"
          />
        </div>
      </div>
{/* ----------------------------------------00000----------------------------- */}
      <div className={`w-full flex gap-[30px] p-[20px] max-md:flex-wrap max-sm:flex-col max-sm:gap-[20px] max-sm:p-[15px]`}>
       {/* --------------------------------------------------- */}

      <div className={`flex-1/2 flex flex-col gap-[20px] p-[15px] bg-white rounded-xl max-sm:flex-1`}>
        <p className={`font-semibold text-xl text-black/80`}>Driver Status</p>
        <div className={`flex flex-col gap-[20px]`}>
          {drivers.map((d) => (
            <div key={d.id} className={`flex justify-between items-center 
            px-[20px] py-[15px] bg-gray-100 rounded
            max-sm:flex-col max-sm:gap-[20px]
            `}>
              <div className={` flex items-center gap-[20px]
                max-sm:justify-between max-sm:w-full
                `}>
                <div className={`icon shrink-0 w-[50px] h-[50px] rounded-full bg-blue-200 flex justify-center items-center`}>
                  <img src="user.svg" alt="" className="w-[var(--icon-width)] h-[var(--icon-height)]"/>
                </div>
                <span className="flex flex-col gap-[5px">
                  <span className={`font-semibold`}>{d.name}</span>
                  <span className={`text-black/80`}>{d.vehicle}</span>
                </span>
              </div>
              <div className={`flex items-center gap-[10px]`}>
                {
                  d.status==="available" &&
                <div className="icon">
                  <img src="done2.svg" alt="" className="w-[var(--icon-width)] h-[var(--icon-height)]"/>

                </div>
                }

                 {
                  d.status==="on-route" &&
                <div className="icon">
                  <img src="time2.svg" alt="" className="w-[var(--icon-width)] h-[var(--icon-height)]"/>

                </div>
                }

                 {
                  d.status==="off-duty" &&
                <div className="icon">
                  <img src="unavail.svg" alt="" className="w-[var(--icon-width)] h-[var(--icon-height)]"/>

                </div>
                }
                <span>{d.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------- */}

      <div className={`flex-1/2 flex flex-col gap-[20px] p-[15px] bg-white rounded-xl max-sm:flex-1`}>
        <p className={`font-semibold text-xl text-black/80`}>Today's Schedule</p>
        <div className={`flex flex-col gap-[20px]`}>
          {drivers.map((d) => (
            <div key={d.id} className={`flex justify-between items-center 
            px-[20px] py-[15px] bg-gray-100 rounded
            
            `}>
              <div className={` flex items-center gap-[20px]`}>
              
                <span className="flex flex-col gap-[5px">
                  <span className={`font-semibold`}>{d.name}</span>
                  <span className={`text-black/80`}>{d.location}</span>
                  <span className={`text-blue-400`}>{d.nextShift}</span>
                </span>
              </div>
               <div className={`icon shrink-0 w-[50px] h-[50px] rounded-full bg-blue-200 flex justify-center items-center`}>
                  <img src="user.svg" alt="" className="w-[var(--icon-width)] h-[var(--icon-height)]"/>
                </div>
            </div>
          ))}
        </div>
      </div>
      {/* Routes List */}
      <div className={`flex-1/2 flex flex-col gap-[20px] p-[15px] bg-white rounded-xl max-sm:flex-1 mt-[20px]`}>
        <p className={`font-semibold text-xl text-black/80`}>Routes & Assignment</p>
        <div className={`flex flex-col gap-[12px]`}>
          {routes.length === 0 && <span className="text-black/60">No routes yet.</span>}
          {routes.map((r) => (
            <div key={r.id} className="flex justify-between items-center px-[20px] py-[12px] bg-gray-100 rounded">
              <div className="flex flex-col">
                <span className="font-semibold">{r.title}</span>
                <span className="text-black/80">{r.from} → {r.to} • {r.date} • {r.startTime}-{r.endTime}</span>
              </div>
              <div className="flex items-center gap-[8px]">
                {r.assignedDriverId ? (
                  <span className="text-green-700 font-medium">Assigned: {drivers.find(d=>d.id===r.assignedDriverId)?.name || "Unknown"}</span>
                ) : (
                  <span className="text-red-700 font-medium">Unassigned</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
      {/* Simple Availability Calendar */}
      <div className={`w-full p-[20px] max-sm:p-[15px]`}>
        <div className={`bg-white rounded-xl p-[15px]`}>
          <p className={`font-semibold text-xl text-black/80 mb-3`}>Availability Calendar (next 7 days)</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-3 border">Driver</th>
                  {[...Array(7)].map((_, i) => {
                    const day = new Date();
                    day.setDate(day.getDate() + i);
                    const label = day.toLocaleDateString();
                    return <th key={i} className="py-2 px-3 border">{label}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {drivers.map(d => (
                  <tr key={d.id}>
                    <td className="py-2 px-3 border font-medium">{d.name}</td>
                    {[...Array(7)].map((_, i) => {
                      const day = new Date();
                      day.setDate(day.getDate() + i);
                      const iso = day.toISOString().slice(0,10);
                      const hasRoute = routes.some(r => r.assignedDriverId === d.id && r.date === iso);
                      return (
                        <td key={i} className={`py-2 px-3 border text-sm ${hasRoute ? 'bg-green-100 text-green-800' : 'bg-gray-50 text-gray-600'}`}>
                          {hasRoute ? 'Assigned' : 'Free'}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
