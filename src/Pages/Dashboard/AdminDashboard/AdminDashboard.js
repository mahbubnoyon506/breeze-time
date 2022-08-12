import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
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
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

            </ul>
          </div>
        </div>
      );
    };

export default AdminDashboard;