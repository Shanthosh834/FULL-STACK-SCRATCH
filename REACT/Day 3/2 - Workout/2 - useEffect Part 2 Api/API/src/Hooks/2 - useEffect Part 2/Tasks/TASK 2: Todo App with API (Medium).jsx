/** 
TASK 2: Todo App with API (Medium)

WHAT TO BUILD:
- Fetch todos from API
- Show title + completed status
- ✅ if completed
- ❌ if not completed
- Show only first 10 todos

API URL:
https://jsonplaceholder.typicode.com/todos

EXPECTED OUTPUT:
✅ delectus aut autem
❌ quis ut nam facilis
✅ fugiat veniam minus
**/

import { useEffect, useState } from "react";

function TodoApp() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        Todos();
    }, []);

    async function Todos() {
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            if(!res.ok) {
                throw new Error(res.status);
            }

            const data = await res.json();
            setResult(data); // For Slic first 10 we can give here or at jsx setResult(data.slice(0, 10));
        } catch(err) {
            setError(err);
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    if(loading) return <h1> Loading ... </h1>
    if(error) return <h1> Error: {error} </h1>

    return (
        <div>
            <p> Total Todo's {result.length} </p>
            {result.slice(0,10).map(post => (
                <div key={post.id}>
                    <p>{post.completed ? `✅ ${post.title}` : `❌ ${post.title}`} </p>
                </div>
            ))}
        </div>
    );
};

export default TodoApp;