/**
TASK 4: Update Post (PUT)

WHAT TO BUILD:
- Input for Post ID (1-100)
- Input for new Title
- Input for new Body
- Update button
- Show result after update

API URL:
https://jsonplaceholder.typicode.com/posts/1

METHOD: PUT

EXPECTED OUTPUT:
ID: [1        ]
Title: [New Title ]
Body:  [New Body  ]
[Update Button]

Updated! 
ID: 1
Title: New Title
Body: New Body
**/

import { useState } from "react";

function Put() {
    const [result, setResult] = useState([]);
    const [id, setId] = useState(1);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    async function handlePut() {
        if(!title || !body) return;
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: 1
                    })
                }
            );

            const data = await res.json();
            console.log(data);
            setResult(data);
            setTitle('');
            setBody('');
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
            onChange={(e) => setId(e.target.value)}
            max={100}
            min={1} />

            <input type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} /> <br />

            <input type="text"
            placeholder="Enter Body"
            value={body}
            onChange={(e) => setBody(e.target.value)} />

            <button onClick={handlePut}>
                {loading ? "Creating ..." : "Create"}
            </button>

                    {result && (
                    <div>
                        <p> Updated </p>
                        <p> Id: {result.id}</p>
                        <p> Title: {result.title} </p>
                        <p> Body: {result.body} </p>
                    </div>
                )}

        </div>
    );
};

export default Put;