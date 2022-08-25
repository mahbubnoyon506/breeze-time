import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../assets/breezeTime.png";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { useEffect } from "react";
const Navbar = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  // 👇️ initialize boolean to false
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    console.log(notifications);
    // 👇️ passed function to setState
    setShowNotification((current) => !current);
  };

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
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const notification = (
    <>
      <div
        onClick={toggleNotification}
        className="cursor-pointer relative ml-3 w-6"
      >
        <p className=" absolute right-0 text-xs  rounded-full   text-white px-[3px] bg-red-500 top-[-0.2rem] ">
          {notifications?.length}
        </p>
        <MdOutlineNotificationsNone className="text-2xl"></MdOutlineNotificationsNone>
        <div className="absolute ">
          {" "}
          {showNotification ? (
            <div className="z-40 toast top-[75px] ">
              <div className="bg-primary p-2 rounded">
              {notifications.map((n) => (
                <div className=" w-52  rounded">
                  <p
                    className=" flex items-center my-2 border-accent-focus border-2 p-2 rounded text-sm font-sans
                   text-white"
                  >
                    {" "}
                    {n?.notification}
                  </p>
                </div>
              ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );

  const dashboardMenu = (
    <>
      {notification}
      <div class="dropdown dropdown-end dropdown-hover">
        <label tabindex="0" class="flex items-center ml-2 cursor-pointer">
          <button class="btn btn-square btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div class=" avatar online sm:hidden lg:block ">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='' />
            </div>
          </div>
        </label>
        <ul tabindex="0" class="dropdown-content menu py-5 p-2 shadow bg-base-100 rounded-box w-52">
          <div class=" avatar lg:hidden flex justify-center pb-5">
            <div class="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='' />
            </div>
          </div>
          <Link className="pl-5" to="/dashboard">
            Dashboard
          </Link>
          <label for="dashboard-drawyer" class="py-3 pl-5 lg:hidden cursor-pointer">Dashboard Menu</label>
          <Link className="pl-5" onClick={logout} to="/">
            Sign Out
          </Link>
        </ul>
      </div>


    </>
  );

  return (
    <>
      <div className="navbar bg-slate-50 lg:px-16 py-5 sm:px-0">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mainMenuItem}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="lg:w-1/2 sm:w-1/4" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{mainMenuItem}</ul>
        </div>
        <div className="navbar-end">

          {user ? (
            dashboardMenu
          ) : (
            <Link className=" px-5 " to="/signin">
              Sign IN
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;


<label for="dashboard-drawyer" class="btn  btn-square btn-ghost lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</label>