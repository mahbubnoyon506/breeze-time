import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import TimeZone from './Components/TimeZone';
import EventType from './Pages/Schadule/EventType';
import DashHome from './Pages/Dashboard/DashHome';
import OneToOneSchedule from './Pages/Schadule/OneToOneSchedule';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Teams from './Pages/Teams/Teams';
import Pricing from './Pages/Pricing/Pricing';


function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/teams' element={<Teams></Teams>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/eventType' element={<EventType />}></Route>
        {/* dashboard routes */}
        <Route path='/dash-home' element={<DashHome></DashHome>}></Route>
        <Route path='/eventtype' element={<EventType></EventType>}></Route>
        <Route path='/one-to-one' element={<OneToOneSchedule></OneToOneSchedule>}></Route>

        {/* timezone route just for checking */}
        <Route path='/timeZone' element={<TimeZone />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
