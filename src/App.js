
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
   <>
   <NoteState>
   <Router>
    <Navbar/>

    <Routes>
          <Route  exact path="/" 
            element = {<Home/>}/>

          <Route  exact path="/about" 
            element = {<About/>}/> 

          <Route  exact path="/login" 
            element = {<Login/>}/>   

          <Route  exact path="/signup" 
            element = {<SignUp/>}/>   

    </Routes>
   </Router>
   </NoteState>
   </>

  );
}

export default App;
