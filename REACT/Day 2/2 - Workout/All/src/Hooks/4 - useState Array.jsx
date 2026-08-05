import { useState } from 'react';

function Arr() {
  const [todos, setTodos] = useState([]);  // ← Starts empty array
  const [input, setInput] = useState("");

const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);  // ← Add to array
      setInput("");
    }
  };

    return (
    <div>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
    );
};

export default Arr;