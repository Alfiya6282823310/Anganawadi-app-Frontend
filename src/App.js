import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Search from './Components/Search';
import Viewall from './Components/Viewall';

function App() {
  return (
    <div>
      <Login/>
      <Register/>
    </div>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Search from './Components/Search';
import Viewall from './Components/Viewall';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
