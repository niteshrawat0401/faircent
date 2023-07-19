import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { PrivateRoute } from './pages/PrivateRoute';
import BmiCalculator from './component/BmiCalculator';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/bmscalculator' element={
        <PrivateRoute>
        <BmiCalculator/>
        </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
