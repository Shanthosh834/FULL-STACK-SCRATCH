import PatternAPI from "./Hooks/2 - useEffect Part 2/0.1 - Pattern";
import GetAll from "./Hooks/2 - useEffect Part 2/1 - Fetch GET All";
import FetchSingle from "./Hooks/2 - useEffect Part 2/2 - Fetch GET Single";
import CreatePost from "./Hooks/2 - useEffect Part 2/3 - Fetch POST";
import SearchPosts from "./Hooks/2 - useEffect Part 2/4 - Fetch with Search";
import UserList from "./Hooks/2 - useEffect Part 2/Tasks/TASK 1: User List (Easy)";
import TodoApp from "./Hooks/2 - useEffect Part 2/Tasks/TASK 2: Todo App with API (Medium)";
import SearchTask from "./Hooks/2 - useEffect Part 2/Tasks/TASK 3: Search Users (Hard)";
import Put from "./Hooks/2 - useEffect Part 2/Tasks/TASK 4: Update Post (PUT)";
import Delete from "./Hooks/2 - useEffect Part 2/Tasks/TASK 5: Delete Post";

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

      <h1> Tasks </h1>
      <h2> User List </h2>
      <UserList />

      <h2> Todo App </h2>
      <TodoApp />

      <h2> Search Task </h2>
      <SearchTask />

      <h2> Put / Upate </h2>
      <Put />

      <h2> Delete </h2>
      <Delete />
    </div>
  );
};

export default App;