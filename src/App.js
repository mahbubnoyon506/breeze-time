import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
