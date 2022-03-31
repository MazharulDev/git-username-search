import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/personDetails'></Route>
      </Routes>
    </div>
  );
}

export default App;
