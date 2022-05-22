import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Shared/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Purchase from './Pages/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReviews from './Pages/Dashboard/AddReviews';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase/:id' element={<Purchase />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } >
            <Route index element={<MyOrders />}></Route>
            <Route path="add-reviews" element={<AddReviews />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
