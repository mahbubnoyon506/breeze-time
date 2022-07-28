import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import TimeZone from './Components/TimeZone';
import EventType from './Pages/Schadule/EventType';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

        <Route path='/eventType' element={<EventType />}></Route>

        {/* timezone route just for checking */}
        <Route path='/timeZone' element={<TimeZone />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
