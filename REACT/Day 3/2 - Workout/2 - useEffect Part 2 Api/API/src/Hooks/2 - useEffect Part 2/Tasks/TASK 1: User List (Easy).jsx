/**
TASK 1: User List (Easy)

WHAT TO BUILD:
- Fetch users from API
- Show name, email, phone
- Show loading while fetching
- Show error if fails

API URL:
https://jsonplaceholder.typicode.com/users

EXPECTED OUTPUT:
Name: Leanne Graham
Email: Sincere@april.biz
Phone: 1-770-736-0800
─────────────────────
Name: Ervin Howell
Email: Shanna@melissa.tv
**/

import { useEffect, useState } from "react";

function UserList() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPost();
    }, []);

    async function fetchPost() {
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if(!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            setResult(data);
        } catch(err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

        if(loading) return <h1> Loaing ... </h1>
        if(error) return <h1> Error: {error} </h1>

    return (
        <div>
            <p> Total Users ({result.length}) </p>
            <hr />
            {result.map(post => (
                <div key={post.id}>
                    <p> Name: {post.name} </p>
                    <p> Email: {post.email} </p>
                    <p> Phone: {post.phone} </p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserList;