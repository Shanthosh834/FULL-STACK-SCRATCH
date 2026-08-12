import { useEffect } from "react";
import { useState } from "react";

function GetAll() {
    const [data,setdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAll();
    }, []);

    async function getAll() {
        setLoading(true);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!res) {
                throw new Error(res.status);
            }
            const data = await res.json();
            setdata(data);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if(loading) return <h2> Loading ... </h2>
    if(error) return <h2> Error: {error} </h2>

    return (
        <div>
            <h1> Total Posts ({data.length}) </h1>
            {data.map(Posts => (
                
                <div key={Posts.id}>
                    <h2> Title: {Posts.title} </h2>
                    <p> Body: {Posts.body} </p>
                </div>
            ))}
        </div>
    );
};

export default GetAll;