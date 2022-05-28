import { Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProduct/AllProducts';
import DashBoard from './pages/DashBoard/DashBoard';
import MyOrder from './pages/DashBoard/MyOrder';
import MyReview from './pages/DashBoard/MyReview';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Order from './pages/Order/Order';
import Purchase from './pages/Purchase/Purchase';

import Header from './pages/shared/Header/Header';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/product' element={<AllProducts></AllProducts>}></Route>
        <Route path='/order/:productid' element={
        <RequireAuth>
          <Order></Order>
        </RequireAuth>} />
        <Route path='/purchase' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>} />
        <Route
         path='/dashboard' element={
        <RequireAuth>
          <DashBoard />
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
