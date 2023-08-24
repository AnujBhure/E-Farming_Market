import './App.css';
import {InsertUser} from './components/register';
import LoginPage from './components/Login';
import {Route,Routes} from 'react-router-dom';
import Admin from './components/adminComponents/admin';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProduct from './components/farmerComponents/ProductForm';
import FarmerModule from './components/farmerComponents/FarmerPage';

function App() {
  return (
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<InsertUser/>}/>
            <Route path="/admin_home" element={<Admin/>}/>
            <Route path="/farmer_home" element={<FarmerModule/>}/>
            <Route path="/addProduct" element={<AddProduct/>}/>
            {/* <Route path="/wholesaler_home" element={<Wholesaler_home/>}/> */}
          </Routes>
          <Footer/>
        </div>
  );
}

export default App;
