import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Products from './pages/Product/Products';
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
        <Route path='/product' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
