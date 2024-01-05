import React, { useState } from "react";
import logo from "../assets/logo-round1.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink, useMatch } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaChartPie } from "react-icons/fa6";

export const Sidebar = ({ toggleBar }: { toggleBar: boolean }) => {
  const [slimBar, setSlimBar] = useState(false);
  const dashboardPath = useMatch("/");
  const graphPath = useMatch("/graphs");
  const chartPath = useMatch("/charts");

  return (
    <div
      className={`${
        slimBar ? "basis-[5%]" : "md:basis-1/5 basis-1/6"
      } dark:bg-stone-600 bg-slate-50 px-8 border-r-2 border-stone-800 border-opacity-5 absolute h-screen md:z-auto z-10 ${
        toggleBar ? "left-0" : "-left-72"
      }  md:relative md:left-auto`}
    >
      <div className=" flex items-center md:gap-4 gap-2 mt-4">
        <figure className="md:w-12 md:h-12 w-8 h-8">
          <img src={logo} alt="" className="w-full h-full" />
        </figure>
        <p
          className={`${
            slimBar && "hidden"
          } font-bold dark:text-purple-200 text-purple-700 md:text-base text-sm`}
        >
          Stats. Board
        </p>
        <div className="md:ml-auto ml-0">
          {slimBar ? (
            <FaArrowAltCircleRight
              className="fill-purple-700 dark:fill-purple-200 cursor-pointer"
              onClick={() => setSlimBar(false)}
            />
          ) : (
            <FaArrowAltCircleLeft
              className="fill-purple-700 dark:fill-purple-200 cursor-pointer"
              onClick={() => setSlimBar(true)}
            />
          )}
        </div>
      </div>

      <nav className="mt-20 text-xs md:text-base">
        <ul className=" flex flex-col gap-2 md:gap-3">
          <li
            className={` ${
              dashboardPath ? "bg-purple-200 dark:text-stone-800" : ""
            } rounded-md font-semibold px-6 py-3 text-purple-800 dark:text-purple-200`}
          >
            <NavLink to={"/"} className={`flex items-center gap-3`}>
              <span className={`${slimBar && "w-7 h-7"} `}>
                <IoStatsChart className="w-full h-full" />
              </span>
              {/* {!slimBar && "Dashboard"} */}
              <span className={`${slimBar && "hidden"}`}>Dashboard</span>
            </NavLink>
          </li>

          <li
            className={`rounded-md font-semibold px-6 py-3 text-purple-800 dark:text-purple-200 ${
              graphPath ? "bg-purple-200 dark:text-stone-800" : ""
            }`}
          >
            <NavLink to={"/graphs"} className={`flex items-center gap-3`}>
              <span className={`${slimBar && "w-7 h-7"} `}>
                <GoGraph className="w-full h-full" />
              </span>
              {/* {!slimBar && "Dashboard"} */}
              <span className={`${slimBar && "hidden"}`}>Graph Visuals</span>
            </NavLink>
          </li>

          <li
            className={`rounded-md font-semibold px-6 py-3 text-purple-800 dark:text-purple-200 ${
              chartPath ? "bg-purple-200 dark:text-stone-800" : ""
            }`}
          >
            <NavLink to={"/charts"} className={`flex items-center gap-3`}>
              <span className={`${slimBar && "w-7 h-7"} `}>
                <FaChartPie className="w-full h-full" />
              </span>
              {/* {!slimBar && "Dashboard"} */}
              <span className={`${slimBar && "hidden"}`}>Chart Visuals</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
