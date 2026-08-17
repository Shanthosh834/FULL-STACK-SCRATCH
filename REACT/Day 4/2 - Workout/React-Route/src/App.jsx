import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import CarProducts from "./Pages/CarProducts";
import BikeProducts from "./Pages/BikeProducts";
function App() {

    const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
    backgroundColor: isActive ? '#e0e0e0' : 'transparent',
    padding: '5px 10px',
    borderRadius: '4px'
});

    return (
        <div>
            {/* Nav */}
            <nav>
                <NavLink to="/" style={navLinkStyles}> Home </NavLink> | {" "}
                <NavLink to="/about" style={navLinkStyles}> About </NavLink> | {" "}
                <NavLink to="/contact" style={navLinkStyles}> Contact </NavLink> | {" "}
                <NavLink to="/products" style={navLinkStyles}> Products </NavLink>
            </nav>

            {/* Route */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/products" element={<Products />}>
                    <Route path="cars" element={<CarProducts />}/>
                    <Route path="bikes" element={<BikeProducts />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;