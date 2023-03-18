
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emoji from './Component/Emoji';




function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Emoji/>}/>
      
    </Routes>
  </BrowserRouter>

 
  );
}

export default App;


