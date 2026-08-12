import { useEffect } from "react";
import { useState } from "react";

function FetchSingle() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(1);

    useEffect(() => {
        singlePost();
    }, [id]);

    async function singlePost() {
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if(!res) {
                    throw new Error(res.status);
                }

            const response = await res.json();
            setData(response);
        } catch(err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="number"
            value={id}
            onChange={(e) => setId(e.target.value)} />

            {loading && <h1> Loading ... </h1>}

            {data && (<div>
                <h2> TIlee: {data.title} </h2>
                <p> Dody: {data.body} </p>
            </div>)}
        </div>
    );
}

export default FetchSingle;