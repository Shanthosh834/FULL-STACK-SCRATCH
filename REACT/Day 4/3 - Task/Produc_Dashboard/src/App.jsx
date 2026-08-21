import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Electronics from './Pages/Electronics';
import Clothing from './Pages/Clothing';
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink> | {" "}
        <NavLink to="/about"> About </NavLink> | {" "}
        <NavLink to="/products"> Product </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}>
          <Route path="electronics" element={<Electronics />}/>
          <Route path='clothing' element={<Clothing />}/>
        </Route>
        <Route path='/product/:id' element={<ProductDetail />} /> 
      </Routes>
    </div>
  );
};

export default App;