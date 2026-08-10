import { useEffect, useState } from "react";

function Size() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => {
            setSize(window.innerWidth);
        };

            window.addEventListener('resize', handleSize);

            return () => { // Clean Up Return Function Stop the timer
                window.removeEventListener('resize', handleSize);
            };
    }, []);

    return (
        <div>
            <h1> {size} </h1>
        </div>
    );
};

export default Size;