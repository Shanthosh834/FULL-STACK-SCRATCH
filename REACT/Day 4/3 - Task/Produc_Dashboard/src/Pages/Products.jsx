import { NavLink, Outlet } from "react-router-dom";

function Products() {
    return (
        <div>
            <h3> Product Detail  </h3>

            <nav>
                <NavLink to="/products/electronics"> Electronics </NavLink> | {" "}
                <NavLink to="/products/clothing"> Clothing </NavLink>
            </nav>

            <Outlet />
        </div>
    );
};

export default Products;