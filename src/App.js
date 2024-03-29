import { Route, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './Pages/Authentication/Login';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Shared/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Purchase from './Pages/Purchase';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReviews from './Pages/Dashboard/AddReviews';
import RequireAuth from './Pages/Authentication/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/Authentication/SignUp';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import Blogs from './Pages/Blogs';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyPortfolio from './Pages/MyPortfolio';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase/:id' element={<RequireAuth>
            <Purchase />
          </RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/myPortfolio' element={<MyPortfolio />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } >
            <Route index element={<MyOrders />}></Route>
            <Route path="add-reviews" element={<AddReviews />}></Route>
            <Route path="my-profile" element={<MyProfile />}></Route>
            <Route path="make-admin" element={<RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>}></Route>
            <Route path="add-product" element={<RequireAdmin>
              <AddProduct />
            </RequireAdmin>}></Route>
            <Route path="manage-product" element={<RequireAdmin>
              <ManageProducts />
            </RequireAdmin>}></Route>
            <Route path="manage-orders" element={<RequireAdmin>
              <ManageOrders />
            </RequireAdmin>}></Route>
            <Route path="payment/:id" element={<Payment />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
