import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PersonDetails from './components/PersonDetails/PersonDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/personDetails/:id' element={<PersonDetails></PersonDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
