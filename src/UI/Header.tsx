import { Dispatch, SetStateAction } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import avatar from "../assets/prof-picture.jpg";
import { useStatistics } from "../contexts/StatisticsContext";
import { useMatch } from "react-router-dom";

export const Header = ({
  darkMode,
  setDarkMode,
  toggleBar,
  setToggleBar,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleBar: boolean;
  setToggleBar: Dispatch<SetStateAction<boolean>>;
}) => {
  const { filterBy, dispatch } = useStatistics();
  const dashboardPath = useMatch("/");
  const graphPath = useMatch("/graphs");
  const chartPath = useMatch("/charts");

  function handleChange(e: any) {
    dispatch && dispatch({ type: "filterBy", payload: e.target.value });
  }
  return (
    // <div className="bg-slate-50 border-b-2 border-stone-800 border-opacity-5 col-start-2 col-end-13 flex items-center justify-between px-10 py-2">
    <div
      className={`dark:bg-stone-600 bg-slate-50 border-b-2 border-stone-800 border-opacity-5 flex items-center justify-between px-4 md:px-10 py-2 text-sm md:text-base`}
    >
      <div className={`block md:hidden absolute z-20 ${toggleBar && "ml-44"}`}>
        <span>
          {toggleBar ? (
            <IoMdClose
              className="dark:fill-white mt-2"
              onClick={() => setToggleBar(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="dark:fill-white mt-1"
              onClick={() => setToggleBar(true)}
            />
          )}
        </span>
      </div>
      <div className="ml-14 md:ml-0">
        <label className="mr-2 dark:text-white" htmlFor="filter">
          Filter Visuals
        </label>
        <select name="" id="filter" value={filterBy} onChange={handleChange}>
          <option value="all">All</option>
          <option value="endYear">End Year</option>
          <option value="topics">Topics</option>
          <option value="sector">Sector</option>
          <option value="region">Region</option>
          <option value="pestle">Pestle</option>
          <option value="source">Source</option>
          <option value="country">Country</option>
        </select>
        <span className="hidden md:inline text-[.6rem] ml-2">
          (works only on dashboard as requested)
        </span>
      </div>
      <div className="flex items-center gap-2 md:gap-8">
        <span className="w-9 h-9 hover:bg-slate-300 dark:hover:bg-stone-500 rounded-full p-1">
          <MdOutlineLightMode
            className="w-full h-full dark:hidden"
            onClick={() => setDarkMode(true)}
          />
          <MdOutlineDarkMode
            onClick={() => setDarkMode(false)}
            className="w-full h-full hidden dark:block fill-white"
          />
        </span>
        <figure className="rounded-full w-10 h-10">
          <img
            src={avatar}
            alt="Avatar Profile Picture"
            className="w-full h-full rounded-full object-cover object-center"
          />
        </figure>
        {/* <span className=" ml-2 md:ml-10 w-9 h-9 hover:bg-slate-300 dark:hover:bg-stone-500 rounded-full p-2">
          <ImExit className="w-full h-full dark:fill-stone-300" />
        </span> */}
      </div>
    </div>
  );
};
