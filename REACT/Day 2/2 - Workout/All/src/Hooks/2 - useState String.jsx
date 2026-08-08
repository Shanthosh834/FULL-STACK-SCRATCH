import { useState } from 'react';

function Words() {
    const [name, setName] = useState("");
  return (
    <div>
        <input type="text"
        placeholder='Enter'
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        />
         <p> {name} </p>
    </div>
  );
    };

export default Words;