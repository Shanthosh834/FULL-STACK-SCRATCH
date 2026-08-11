import { useState, useEffect } from 'react';

function PatternAPI() {
    // 3 states always needed for API:
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); // ← Empty = fetch ONCE!

    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const result = await res.json();
            setData(result);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    if(loading) return <h2>Loading...</h2>;
    if(error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <h1>Posts ({data.length})</h1>
            {data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PatternAPI;