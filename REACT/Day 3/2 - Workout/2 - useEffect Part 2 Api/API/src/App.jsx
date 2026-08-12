import PatternAPI from "./Hooks/2 - useEffect Part 2/0.1 - Pattern";
import GetAll from "./Hooks/2 - useEffect Part 2/1 - Fetch GET All";
import FetchSingle from "./Hooks/2 - useEffect Part 2/2 - Fetch GET Single";
import CreatePost from "./Hooks/2 - useEffect Part 2/3 - Fetch POST";
import SearchPosts from "./Hooks/2 - useEffect Part 2/4 - Fetch with Search";

function App() {
  return(
    <div>
      <h1> useEffect Part - 2 Api </h1>

      <h2> Common Pattern Like UseStae and error an useEffect </h2>
      <PatternAPI />

      <h2> Get All Posts </h2>
      <GetAll />

      <h2> Fetch Single Post </h2>
      <FetchSingle />

      <h2> Post </h2>
      <CreatePost />

      <h2> Search Posts </h2>
      <SearchPosts />
    </div>
  );
};

export default App;