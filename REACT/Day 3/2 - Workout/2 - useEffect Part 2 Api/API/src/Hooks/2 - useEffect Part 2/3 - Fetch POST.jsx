import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    async function handleCreate() {
        if(!title || !body) return;
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
                {
                    method: "post",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: 1
                    })
                }
            );

            const data = await res.json();
            setResult(data);
            setTitle('');
            setBody('');


        } catch(err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };
    return(
        <div>

            <input type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}} />


            <input type="text"
            placeholder="Enter Body"
            value={body}
            onChange={(e) => {setBody(e.target.value)}} />


            <button onClick={handleCreate}>
                {loading ? "Creating..." : "Create Post"}
            </button>
            {result && (
                <div>
                    <h3> Created Id: {result.id} </h3>
                    <p> Title: {result.title} </p>
                </div>
            )}
        </div>
    );
}

export default CreatePost;