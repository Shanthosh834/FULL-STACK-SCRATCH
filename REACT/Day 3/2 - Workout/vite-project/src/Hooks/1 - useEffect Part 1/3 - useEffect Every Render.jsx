import { useState, useEffect } from "react";

function Every() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Runs Every Render`);
    }); // ← No array = every render

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default Every;