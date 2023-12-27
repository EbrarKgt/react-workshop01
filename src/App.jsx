import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductDetails from './components/ProductCard/ProductDetail';
import ProductList from './pages/Products/ProductList';
import AddProducts from './pages/AddProducts/AddProducts';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path = "/homepage" element = {<Homepage />}>/</Route>
      <Route path = "/about" element = {<About />}>/</Route>
      <Route path="/product-detail/:productId" element={<ProductDetails />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/add-products" element={<AddProducts />} />
      <Route path = "*" element = {<p>Not Found</p>}>/</Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
