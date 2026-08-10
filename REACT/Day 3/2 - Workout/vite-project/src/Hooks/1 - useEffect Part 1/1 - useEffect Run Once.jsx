import { useEffect, useState } from "react";
function Once() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(" Component Loaded Only Once! ");
        document.title = " My React App!! ";
    }, []); // ← Empty array = run once
    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default Once; 

/* 
    1. Component loads → useEffect runs once

    2. Click button → count changes → component re-renders → useEffect DOES NOT run again

*/