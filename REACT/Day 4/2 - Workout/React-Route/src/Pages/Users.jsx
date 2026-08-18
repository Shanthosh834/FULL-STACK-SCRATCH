import { NavLink, useParams } from "react-router-dom";

function Users() {

    const users = [
        { name: "Shanthosh", id: 1 },
        { name: "Siva", id: 2 },
        { name: "Sanjay", id: 3 },
        { name: "Suriya", id: 4 },
        { name: "Selva", id: 5 }
    ];

    return (
        <div>
            <h1> Users </h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <NavLink to={`/user/${user.id}`}>
                            Name: {user.name} Id: {user.id}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;