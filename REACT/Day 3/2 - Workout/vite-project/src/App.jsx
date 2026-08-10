import Once from './Hooks/1 - useEffect Part 1/1 - useEffect Run Once';
import Changed from './Hooks/1 - useEffect Part 1/2 - useEffect Runs When Changed';
import Every from './Hooks/1 - useEffect Part 1/3 - useEffect Every Render';
import TitleChange from './Hooks/1 - useEffect Part 1/Tasks/1 - Page Title Change';
import Timer from './Hooks/1 - useEffect Part 1/Tasks/2 - Timer With Cleanup';
import Size from './Hooks/1 - useEffect Part 1/Tasks/3 - Window Size Track';

function App() {
  return (
    <div>
      <h1> Hello </h1>

      <Once />

      <Changed />

      <Every />

      <TitleChange />

      <Timer />

      <Size />
    </div>
  );
};

export default App;