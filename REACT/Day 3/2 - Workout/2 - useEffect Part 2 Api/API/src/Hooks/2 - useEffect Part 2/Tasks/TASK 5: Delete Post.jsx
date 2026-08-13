/**
TASK 5: Delete Post

WHAT TO BUILD:
- Input for Post ID
- Delete button
- Show success message after delete
- Show loading while deleting

API URL:
https://jsonplaceholder.typicode.com/posts/1

METHOD: DELETE

EXPECTED OUTPUT:
ID: [1   ]
[Delete Button]

✅ Post 1 Deleted Successfully!
**/

import { useState } from "react";

function Delete() {
    const [result, setResult] = useState(null);
    const [id,setId] = useState(1);
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "delete"
                }
            );

            if(!res.ok) {
                throw new Error(res.status);
            }

            setResult(id);

    } catch(err) {
        console.log(err.message);
    } finally {
        setLoading(false);
    }
        }
    
    return (
        <div>
            <input type="number"
             value={id}
             onChange={(e) => setId(e.target.value)}/>

             <button onClick={handleDelete}>
                {loading ? "Deleting ... " : "Delete"}
             </button>

             {result && (
                <div>
                    <p> ✅ Post {result} Deleted Successfully! </p>
                </div>
             )}
        </div>
    );
};

export default Delete;