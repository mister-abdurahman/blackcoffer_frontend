import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [toggleBar, setToggleBar] = useState(false);
  // grid: 4 columns 10 rows
  return (
    // <div className="h-screen grid grid-rows-12 font-sans">
    <div className={`${darkMode ? "dark" : ""} h-screen flex font-sans`}>
      <Sidebar toggleBar={toggleBar} />

      <div className={`grow flex flex-col`}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleBar={toggleBar}
          setToggleBar={setToggleBar}
        />
        {/* <main className="col-span-11 row-span-11 overflow-y-auto "> */}
        <main className="overflow-y-auto grow dark:bg-stone-200 md:text-base text-sm">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
