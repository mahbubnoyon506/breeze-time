import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useProfessional from "../../hooks/useProfessional";
import { HiMenu } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";
import "../../App.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [professional] = useProfessional(user);


  const adminMenu = (
    <>
      <li>
        <Link className="bg-transparent " to="/dashboard">
          <p className="flex items-center ">
            {" "}
            <FaHouseUser className="mr-2 text-5xl text-[#F96669] "></FaHouseUser>
          </p>
        </Link>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/profile"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Admin Profile
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/manageUser"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Manage User
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/manageEvent"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Manage Event
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/scheduledEvents"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Scheduled Events
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/packages"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Packages
          </p>
        </NavLink>
      </li>

      {/* <li>
        <Link to="/dashboard/professionalCollections">
          Professional Collections
        </Link>
      </li> */}

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/professionalCollections"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Professional Collections
          </p>
        </NavLink>
      </li>
    </>
  );

  const professionalMenu = (
    <>
      <li>
        <Link className="bg-transparent " to="/dashboard">
          <p className="flex items-center ">
            {" "}
            <FaHouseUser className="mr-2 text-5xl text-[#F96669] "></FaHouseUser>
          </p>
        </Link>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/profile"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Profile
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/eventTypes"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Event Types
          </p>
        </NavLink>
      </li>
    </>
  );
  const userMenu = (
    <>
      <li>
        <Link className="bg-transparent " to="/dashboard">
          <p className="flex items-center ">
            {" "}
            <FaHouseUser className="mr-2 text-5xl text-[#F96669] "></FaHouseUser>
          </p>
        </Link>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/profile"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Profile
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/eventTypes"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Event Types
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/scheduledEvents"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Scheduled Events
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "in-active")}
          to="/dashboard/workFlow"
        >
          <p className="flex items-center ">
            {" "}
            <HiMenu className="mr-2"></HiMenu>
            Workflows
          </p>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawyer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-slate-50">
        <label for="dashboard-drawyer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-slate-50 lg:bg-transparent ">
          {
            admin ? adminMenu : (professional ? professionalMenu : userMenu)
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
