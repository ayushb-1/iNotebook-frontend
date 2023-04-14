
import './App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Navbar/>

    <Routes>

          <Route  exact path="/home" 
            element = {<Home/>}/>

          <Route  exact path="/about" 
            element = {<About/>}/>   

    </Routes>
   </Router>
   </>

  );
}

export default App;
