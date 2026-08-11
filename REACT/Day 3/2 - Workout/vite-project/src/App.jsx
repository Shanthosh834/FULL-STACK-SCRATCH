import Once from './Hooks/1 - useEffect Part 1/1 - useEffect Run Once';
import Changed from './Hooks/1 - useEffect Part 1/2 - useEffect Runs When Changed';
import Every from './Hooks/1 - useEffect Part 1/3 - useEffect Every Render';
import TitleChange from './Hooks/1 - useEffect Part 1/Tasks/1 - Page Title Change';
import Timer from './Hooks/1 - useEffect Part 1/Tasks/2 - Timer With Cleanup';
import Size from './Hooks/1 - useEffect Part 1/Tasks/3 - Window Size Track';
import PatternAPI from './Hooks/2 - useEffect Part 2/0.1 - Pattern';

function App() {
  return (
    <div>
      {/* useEffect Part - 1 Array */}
      <div>
        <h1> useEffect Part - 1 Array</h1>

        <p> useEffect Run At Once </p>
          <Once />

        <p> useEffect Rus When Chnaged </p>
          <Changed />

        <p> useEffect Runs Every Render </p>
          <Every />

        <h1> Tasks :  </h1>
        <p> Task 1 - Page Title Change </p>
          <TitleChange />

        <p> Task 2 - Timer Change </p>
          <Timer />

        <p> Task 3 - Window Size Tracker </p>
          <Size />
      </div>

      <div>
        {/* useEffect Part - 2 API Call */}

        <h1> useEffect Part - 2 API Call </h1>
        <PatternAPI />
      </div>
    </div>
    
  );
};

export default App;