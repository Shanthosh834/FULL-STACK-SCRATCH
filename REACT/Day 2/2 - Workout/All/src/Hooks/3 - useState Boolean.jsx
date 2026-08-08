import { useState } from 'react';
// Basic UseState
function Bool() {
  const[isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {setVisible(!isVisible)}}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p> Displayed </p> }
      
    </div>
  );
};

export default Bool;