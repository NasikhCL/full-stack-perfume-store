import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart';
// import { useSelector } from 'react-redux';
function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route  path='/signin-signup/*' element={<LoginSignUp />}/>
      <Route  path='/signin-signup/*' element={<LoginSignUp />}/>
      <Route exact path='/cart' element={<Cart />}/>

      </Routes>

      
    </div>
  );
}

export default App;
