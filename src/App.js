import { Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProduct/AllProducts';
import Blog from './pages/Blog/Blog';
import AddProduct from './pages/DashBoard/AddProduct';
import Alluser from './pages/DashBoard/Alluser';
import DashBoard from './pages/DashBoard/DashBoard';
import MakeAdmin from './pages/DashBoard/MakeAdmin';
import ManageOrder from './pages/DashBoard/ManageOrder';
import ManageProduct from './pages/DashBoard/ManageProduct';
import MyOrder from './pages/DashBoard/MyOrder';
import MyProfile from './pages/DashBoard/MyProfile';
import MyReview from './pages/DashBoard/MyReview';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Order from './pages/Order/Order';
import PagenotFound from './pages/PagenotFound';
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
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<PagenotFound></PagenotFound>}></Route>
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
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='allUser' element={<Alluser></Alluser>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
