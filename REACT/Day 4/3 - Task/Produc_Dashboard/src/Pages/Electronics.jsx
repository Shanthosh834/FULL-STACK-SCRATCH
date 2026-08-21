import { NavLink, Route } from "react-router-dom";

function Electronics() {
    const elect = [
        {name: "Laptop", id: 1, price: "$999"},
        {name: "Phone", id: 2, price: "$699"},
        {name: "Headphones", id: 3, price: "$199"}
    ];
    return (
        <div>
            <h2> Electronics </h2>

            <ul>
                {elect.map(item => (
                    <li key={item.id}>
                        <NavLink to={`/product/${item.id}`}>
                            {item.name} {item.price}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Electronics;