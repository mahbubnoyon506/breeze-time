import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Login/Signin';
import SignUp from './Components/Login/SignUp';
// import TimeZone from './Components/TimeZone';
import EventType from './Pages/Schadule/EventType';
import DashHome from './Pages/Dashboard/DashHome';
import OneToOneSchedule from './Pages/Schadule/OneToOneSchedule';
import GroupSchedule from './Pages/Schadule/GroupSchedule';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Teams from './Pages/Teams/Teams';
import Pricing from './Pages/Pricing/Pricing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import RequireAuth from './Components/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import EventsTypes from './Pages/Dashboard/UserDashBoard/EventTypes';
import ScheduledEvents from './Pages/Dashboard/UserDashBoard/ScheduledEvents';
import WorkFlows from './Pages/Dashboard/UserDashBoard/WorkFlows';
import RoutingForms from './Pages/Dashboard/UserDashBoard/RoutingForms';
import Payment from './Pages/Payment/Payment';
import ManageUser from './Pages/Dashboard/AdminDashboard/ManageUser';
import ManageEvent from './Pages/Dashboard/AdminDashboard/ManageEvent';
import { useEffect } from 'react';
import RequiredAdmin from './Components/RequiredAdmin';
import ManagePackages from './Pages/Dashboard/AdminDashboard/ManagePackages';
import Profile from './Pages/Dashboard/Profile';
import ProfessionalCollection from './Pages/Dashboard/AdminDashboard/ProfessionalCollection';
import Aos from 'aos';

import Chat from './ChatBoot/Chat';
import NotFound from './Pages/NotFound';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      <Chat></Chat>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/teams" element={<Teams></Teams>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DashHome></DashHome>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
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
        {/* admin route  */}
        <Route
          path="/dashboard"
          element={
            <RequiredAdmin>
              <Dashboard />
            </RequiredAdmin>
          }
        >
          <Route
            path="professionalCollections"
            element={
              <RequiredAdmin>
                <ProfessionalCollection />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="manageUser"
            element={
              <RequiredAdmin>
                <ManageUser />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="manageEvent"
            element={
              <RequiredAdmin>
                <ManageEvent />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="scheduledEvents"
            element={
              <RequiredAdmin>
                <ScheduledEvents />
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="packages"
            element={
              <RequiredAdmin>
                <ManagePackages />
              </RequiredAdmin>
            }
          ></Route>
        </Route>

        {/* admin route  */}

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
        <Route
          path="/group-meeting"
          element={
            <RequireAuth>
              <GroupSchedule />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>

        {/* timezone route just for checking */}
        {/* <Route path="/timeZone" element={<TimeZone />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
