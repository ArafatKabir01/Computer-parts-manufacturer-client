import { Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProduct/AllProducts';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Order from './pages/Order/Order';

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
        <Route path='/order' element={
        <RequireAuth>
          <Order></Order>
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
