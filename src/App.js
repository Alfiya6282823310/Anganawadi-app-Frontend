import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Search from './Components/Search';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/search' element={<Search/>}/>
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
