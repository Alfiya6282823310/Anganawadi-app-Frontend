import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Search from './Components/Search';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
  
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
