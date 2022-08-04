import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import TimeZone from "./Components/TimeZone";
import EventType from "./Pages/Schadule/EventType";
import DashHome from "./Pages/Dashboard/DashHome";
import OneToOneSchedule from "./Pages/Schadule/OneToOneSchedule";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Teams from "./Pages/Teams/Teams";
import Pricing from "./Pages/Pricing/Pricing";
import RequireAuth from "./Components/RequireAuth";
import Enterprise from "./Pages/Enterprise";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EventsTypes from "./Pages/Dashboard/EventTypes";
import ScheduledEvents from "./Pages/Dashboard/ScheduledEvents";
import WorkFlows from "./Pages/Dashboard/WorkFlows";
import RoutingForms from "./Pages/Dashboard/RoutingForms";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/teams" element={<Teams></Teams>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/enterprise" element={<Enterprise></Enterprise>} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        {/* dashboard routes */}
        {/* <Route
          path="/"
          element={
            <RequireAuth>
              <DashHome />
            </RequireAuth>
          }
        ></Route> */}

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DashHome></DashHome>}></Route>
          <Route
            path="eventTypes"
            element={<EventsTypes></EventsTypes>}
          ></Route>
          <Route
            path="scheduledEvents"
            element={<ScheduledEvents></ScheduledEvents>}
          ></Route>
          <Route path="workFlow" element={<WorkFlows></WorkFlows>}></Route>
          <Route
            path="routingForms"
            element={<RoutingForms></RoutingForms>}
          ></Route>
        </Route>
        <Route
          path="/eventtype"
          element={
            <RequireAuth>
              <EventType />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/one-to-one"
          element={
            <RequireAuth>
              <OneToOneSchedule />
            </RequireAuth>
          }
        ></Route>

        {/* timezone route just for checking */}
        <Route path="/timeZone" element={<TimeZone />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
