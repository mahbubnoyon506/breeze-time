import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../assets/breezeTime.png";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

import { MdOutlineNotificationsNone } from "react-icons/md";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const mainMenuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
      <li>
        <Link to="/enterprise">Enterprise</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="#">About</Link>
      </li>
      <li>
        <Link to="#">Contact</Link>
      </li>
    </>
  );

  const dashboardMenu = (
    <>
      <Link className=" mx-3" to="/dashboard">
        Dashboard
      </Link>
      <Link onClick={logout} className="" to="/">
        Sign Out
      </Link>
    </>
  );
  const notification = (
    <>
      <div className="relative ml-3 w-6">
        <p className=" absolute right-0 text-xs  rounded-full   text-white px-[3px] bg-red-500 top-[-0.2rem] ">
          0
        </p>
        <MdOutlineNotificationsNone className="text-2xl"></MdOutlineNotificationsNone>
      </div>
    </>
  );

  return (
    <>
      <div class="navbar bg-slate-50 lg:px-16 py-5 sm:px-0">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mainMenuItem}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="lg:w-1/2 sm:w-1/4" alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{mainMenuItem}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            dashboardMenu
          ) : (
            <Link className="text-lg text-bold px-5 " to="/login">
              Login
            </Link>
          )}

          {user ? notification : <></>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
