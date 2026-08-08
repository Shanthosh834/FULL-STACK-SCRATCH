import { useState } from 'react';

function Arr() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if(input.trim()) {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  return (
    <div>
      <input type="text"
      value={input}
      placeholder='Enter Todo...'
      onChange={(e) => setInput(e.target.value)} />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((todo, index) => (
          <li key={index}> {todo} </li>
        ))}
      </ul>
    </div>
  );
};
export default Arr;