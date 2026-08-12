// Task - 1 Page Title Changer - Call this function in ap0p.jsx to See

import { useState, useEffect } from "react";

function TitleChange() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count : ${count}`;
        console.log(`Title Changed`);
    }, [count]);

    return (
        <div>
            <h1> {count} </h1>
            
            <button onClick={() => {setCount(count + 1)}}>Ad</button>
        </div>
    );
};

export default TitleChange;