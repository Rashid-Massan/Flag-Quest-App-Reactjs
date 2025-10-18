import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

function Navbar() {
  let [isOpened, setOpen] = useState(false);
  return (
    <div className="bg-[#1F1F2E] h-11 font-press2 text-white font-medium p-3 max-sm:p-0 gap-12 w-full text-sm">
      <button
        className="sm:hidden text-3xl pl-4 "
        onClick={() => {
          setOpen(!isOpened);
        }}
      >
        ☰
      </button>
      <div className={`flex gap-12 max-sm:hidden`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          All countries
        </NavLink>
        <NavLink
          to="/asia"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Asia
        </NavLink>
        <NavLink
          to="/europe"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Europe
        </NavLink>
        <NavLink
          to="/america"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          America
        </NavLink>
        <NavLink
          to="/africa"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Africa
        </NavLink>
      </div>
      <div
        className={`sm:hidden flex flex-col z-20 fixed top-0 w-1/2 h-screen gap-9 bg-[#262636] box-border p-2 transition-all ${
          isOpened ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <button
          className="self-end text-red-400 text-xl"
          onClick={() => {
            setOpen(!isOpened);
          }}
        >
          x
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          All countries
        </NavLink>
        <NavLink
          to="/asia"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Asia
        </NavLink>
        <NavLink
          to="/europe"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Europe
        </NavLink>
        <NavLink
          to="/america"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          America
        </NavLink>
        <NavLink
          to="/africa"
          className={({ isActive }) =>
            isActive ? "border-b-2 transition-all duration-50" : ""
          }
        >
          Africa
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
