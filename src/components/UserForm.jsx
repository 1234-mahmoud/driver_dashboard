import React, { useState } from "react";
import Customer from "./Customer";
import DriverForm from "./DriverForm";

export default function UserForm() {
  //select Your Role are you Customer or Driver

  const [role, setRole] = useState("");

  return (
    <div className={`w-full bg-gray-100`}>
      <div>
        <h1 className={`text-center m-[20px] font-bold text-2xl text-black/60`}>Are You a Customer Or Driver?</h1>
      <div className={`flex justify-center items-center gap-[40px]
        max-sm:flex-col  max-sm:items-start max-sm:px-[20px]
        `}>
        <label className="flex items-center gap-[5px] text-xl">
        <input
          type="radio"
          value="customer"
          checked={role === "customer"}
          onChange={(e) => setRole(e.target.value)}
        />
        Customer
      </label>
      <label className="flex items-center gap-[5px] text-xl">
        <input
          type="radio"
          value="driver"
          checked={role === "driver"}
          onChange={(e) => setRole(e.target.value)}
        />
        Driver
      </label>
      </div>
      </div>
      {role === "customer" && <Customer />}

      {role === "driver" && <DriverForm />}
    </div>
  );
}
