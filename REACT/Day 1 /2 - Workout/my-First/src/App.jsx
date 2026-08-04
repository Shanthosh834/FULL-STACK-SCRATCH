import UserCard from "./Components/UserCard";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {

  const name = "Shanthosh S";
  const age = 22;
  console.log(name);// to show in terminal need to do in node here react is frontend so only browser log
  return (
    <div>
      <h1> Hello React!! </h1>
      <p> This is my First Project </p>
      <p>{name}</p>
      <p>{name.toUpperCase()}!</p><br />

      <div>
        <UserCard name = " First Name "/><br />
      </div>

        <UserCard  name = " Second Name "/> <br /> {/* Always shows "Shanthosh" */}

        <UserCard name = " Third Name " age = {23}/> <br /> {/* With Props */}

        <UserCard name = " Fourth Name " age = {24}/> <br /> {/* With Props */}

        <About />
        
        <Home />

    </div>
  );
}

export default App;