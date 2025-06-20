
import { Route, Routes } from 'react-router';
import './App.css';
import Detail from './Overall/Components/Detail';
import Header from './Overall/Components/Header';
import Footer from './Overall/Components/Footer';
import Aboutus from './Overall/Components/Aboutus';
import Services from './Overall/Pages/Services';
import Login from './Overall/Pages/Login';
import Notfound from './Overall/Pages/Notfound';
import CreateAcc from './Overall/Pages/CreateAcc';
import Contact from './Overall/Components/Contact';
import Delivery from './Overall/Pages/Delivery';
import Billing from './Overall/Pages/Billing';
import Cart from './Overall/Pages/Cart';
import Addproduct from './Overall/Pages/Addproduct';
function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="*" element={<Notfound />} /> 
        <Route path="/" element={<Detail />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/CreateAcc" element={<CreateAcc />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Addproduct" element={<Addproduct />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
