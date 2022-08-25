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
            <div className="">
              {notifications.map((n) => (
                <div className="z-50 toast bg-[#F96669] py-1 px-3 left-[-5.5rem] rounded relative my-2 ">
                  <p className=" text-white text-sm font-mono">
                    {n?.notification}
                  </p>
                </div>
              ))}
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
      <Link className=" mx-3" to="/dashboard">
        Dashboard
      </Link>
      <Link onClick={logout} className="" to="/">
        Sign Out
      </Link>
      {notification}
      <label for="dashboard-drawyer" class="btn btn-square btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
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
            <Link className="text-lg text-bold px-5 " to="/login">
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