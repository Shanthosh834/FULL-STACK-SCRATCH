import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink></NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;