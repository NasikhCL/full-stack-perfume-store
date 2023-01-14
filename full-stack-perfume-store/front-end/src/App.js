import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import RegiserLogin from './pages/RegiserLogin';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Navbar />
      <ProductDetails />

      {/* <RegiserLogin /> */}
    </div>
  );
}

export default App;
