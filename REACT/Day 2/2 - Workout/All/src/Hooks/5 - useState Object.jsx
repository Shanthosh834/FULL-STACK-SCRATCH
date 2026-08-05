import { useState } from 'react';

function Obj() {
    const [user, setUser] = useState({
    name: "",
    age: 0
  });
    const updateName = (e) => {
    setUser({ ...user, name: e.target.value });  // ← Update only name
  };
  
    const updateAge = (e) => {
    setUser({ ...user, age: Number(e.target.value) });  // ← Update only age
  };
    return (
        <div>
        <input 
        placeholder="Name"
        value={user.name}
        onChange={updateName}
      /><br />
      <input 
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={updateAge}
      /><br />
      <p>Name: {user.name}</p><br />
      <p>Age: {user.age}</p>
        </div>
    );
};

export default Obj;