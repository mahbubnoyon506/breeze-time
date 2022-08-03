import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../assets/breezeTime.png";
import auth from "../firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const mainMenuItem = (
    <>
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
      <Link className="uppercase mx-3" to="/dashboard">
        Dashboard
      </Link>
      <Link onClick={logout} className="uppercase" to="/">
        Sign Out
      </Link>
    </>
  );

  return (
    <>
      <div class="navbar bg-base-100 lg:px-16 py-5 sm:px-0">
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
            <img src={logo} className="lg:w-1/2 sm:w-full" alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{mainMenuItem}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            dashboardMenu
          ) : (
            <Link className="text-lg text-bold px-5 uppercase" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
