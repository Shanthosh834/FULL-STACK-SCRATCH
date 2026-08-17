import { NavLink, Outlet } from "react-router-dom";

function Products() {

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
            <h1> Products Page </h1>
            <p>Welcome to the Home page!</p>
            {/* Chil Link */}
            <NavLink to="/products/cars" style={navLinkStyles}> Cars </NavLink> | {" "}
            <NavLink to="/products/bikes" style={navLinkStyles}> Bikes </NavLink>

            <Outlet />
        </div>
    );
};

export default Products;