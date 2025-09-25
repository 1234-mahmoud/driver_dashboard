import data from "../data/data.json";
export default function Dashboard() {
  const availableCount = data.filter(
    (driver) => driver.status === "available"
  ).length;


  const onroute = data.filter((driver) => driver.status === "on-route").length;
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
        className={`my-[50px] w-full p-[30px] flex justify-center items-center flex-wrap gap-[20px]`}
      >
        <div
          className={`w-[250px] h-[120px] flex justify-center items-center gap-[40px] 
            bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl
            

            
            `}
        >
          <div className={`flex flex-col`}>
            <span>Total Drivers</span>
            <span className="text-2xl font-bold">{data.length}</span>
          </div>

          <img
            src="user2.svg"
            alt=""
            className="w-[var(--icon-width)] h-[var(--icon-height)]"
          />
        </div>

        <div
          className={`w-[250px] h-[120px] flex justify-center items-center gap-[40px] 
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
          className={`w-[250px] h-[120px] flex justify-center items-center gap-[40px] 
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
     <div className={`w-full flex gap-[30px] p-[20px] max-md:flex-wrap`}>
       {/* --------------------------------------------------- */}

      <div className={`flex-1/2 flex flex-col gap-[20px] p-[15px] bg-white rounded-xl`}>
        <p className={`font-semibold text-xl text-black/80`}>Driver Status</p>
        <div className={`flex flex-col gap-[20px]`}>
          {data.map((d) => (
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

     <div className={`flex-1/2 flex flex-col gap-[20px] p-[15px] bg-white rounded-xl`}>
        <p className={`font-semibold text-xl text-black/80`}>Today's Schedule</p>
        <div className={`flex flex-col gap-[20px]`}>
          {data.map((d) => (
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





     </div>
    </div>
  );
}
