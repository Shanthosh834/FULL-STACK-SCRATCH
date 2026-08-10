import { useState, useEffect } from "react";

function Changed() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");


    useEffect( () => {
        console.log(`Count Chnaged to ${count}`);
        document.title = `Count: ${count}`;
    }, [count]);


    useEffect(() => {
        console.log(`Name Chnaged To : ${name}`);
    }, [name]);
    return(
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add</button><br /><br />

            <input type="text"
            placeholder="Enter"
            value={name}
            onChange={(e) => setName(e.target.value)} />

            <p> {name} </p>
        </div>
    );
};

export default Changed;

/* 
    1. Click +1 → count changes → First useEffect runs

    2. Type in input → name changes → Second useEffect runs

    3. Each effect runs ONLY when its dependency changes!
    
*/