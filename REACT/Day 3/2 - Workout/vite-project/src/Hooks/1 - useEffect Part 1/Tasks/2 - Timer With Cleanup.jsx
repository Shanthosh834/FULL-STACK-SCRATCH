import { useState, useEffect } from "react";

function Timer() {
    const[seconds, setSeconds] = useState(0);
    const [isRun, setIsRun] = useState(false);

    useEffect(() => {
        if (!isRun) return;
        const interval = setInterval(() => {
            setSeconds(prev => prev +1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [isRun]);

    return (
        <div>
            <h1> {seconds} </h1>
            <button onClick={() => setIsRun(!isRun)}>
                {isRun? "Pause" : "Run"}
            </button>
        </div>
    );
    
};

export default Timer;