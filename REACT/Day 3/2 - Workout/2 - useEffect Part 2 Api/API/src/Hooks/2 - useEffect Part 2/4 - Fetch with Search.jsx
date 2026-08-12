import { useEffect } from "react";
import { useState } from "react";

function SearchPosts() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        searchPosts();
    }, []);

    async function searchPosts() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if(!res) {
            throw new Error(res.status);
        }
        const data = await res.json();
        setResult(data);
    };

        const filtered = result.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

       return (
        <div>
            <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ..." />

            <p> Found: ({filtered.length}) Posts </p>
            {filtered.map(post => (
                <div key={post.id}>
                    <h3> {post.title} </h3>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SearchPosts;