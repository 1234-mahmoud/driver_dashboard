import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggle_side = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`relative max-h-full min-h-lvh 
         bg-gradient-to-b from-blue-500 to-blue-600
        text-white flex flex-col 
        py-[20px] px-[5px]
        transition-all duration-500 ease-in-out

${toggle ? "w-[200px]" : "w-[70px] overflow-hidden"}

        `}
    >
      <div
        onClick={toggle_side}
        className={`toggle mx-auto mb-[20px] w-[40px] h-[40px]
    transition-all duration-500 ease-in-out
      ${toggle ? "translate-x-full" : ""}
      `}
      >
        <img src="sidebar.svg" alt="sidebar icon" className="w-full h-full" />
      </div>

      {/* Logo */}
      <div className="logo flex items-center gap-[15px] w-full rounded px-[3px]">
        <div className="img w-12 h-12 shrink-0 rounded-full overflow-hidden">
          <img src="driver.jpg" alt="Logo" />
        </div>
        <h1 className="font-bold"> Dashboard</h1>
      </div>

      <div className="my-[50px] flex flex-col items-center gap-4">
        <ul className="links w-full flex flex-col gap-4 text-xl">
          <li className="w-full">
            <Link to="/" className="flex items-center gap-[30px] w-full ">
              <img
                src="hom.svg"
                alt=""
                className="w-[var(--icon-width)] h-[var(--icon-height)]"
              />
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link to="/Drivers" className="flex items-center gap-[30px] w-full">
              <img
                src="user.svg"
                alt=""
                className="w-[var(--icon-width)] h-[var(--icon-height)]"
              />
              Driver
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/RouteForm"
              className="flex items-center gap-[30px] w-full"
            >
              <img
                src="road.svg"
                alt=""
                className="w-[var(--icon-width)] h-[var(--icon-height)]"
              />
              Route
            </Link>
          </li>
 
        </ul>

        <Link
          to={"./UserForm"}
          className={`absolute bottom-[20px] flex items-center gap-[15px] w-full px-[8px]`} //10px - 2px of border = 8px
        >
          <div className="user w-12 h-12 shrink-0 bg-white rounded-full border-2 border-black/50 overflow-hidden">
            <img src="user.png" alt="User Pic" />
          </div>
          Mahmoud
        </Link>
      </div>
    </div>
  );
}
