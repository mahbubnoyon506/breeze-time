import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);


  const adminMenu =
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/manageUser">Manage User</Link>
      </li>
      <li>
        <Link to="/dashboard/manageEvent">Manage Event</Link>
      </li>
      <li>
        <Link to="/dashboard/scheduledEvents">Scheduled Events</Link>
      </li>
      <li>
        <Link to="/dashboard/professionalcollections">Professional Collections</Link>
      </li>
    </>

  const userMenu =
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/eventTypes">Event Types</Link>
      </li>
      <li>
        <Link to="/dashboard/scheduledEvents">Scheduled Events</Link>
      </li>
      <li>
        <Link to="/dashboard/workFlow">Workflows</Link>
      </li>
      <li>
        <Link to="/dashboard/routingForms">RoutingForms</Link>
      </li>
    </>
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="mx-10  btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80  text-base-content bg-slate-100 ">
          {
            admin ? adminMenu : userMenu
          }

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
