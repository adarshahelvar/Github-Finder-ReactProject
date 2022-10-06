import './App.css';
import Navbar from './component/Navbar';
import About from './component/about';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
     <Route exact path = "/about" component = {About} />

      </div>


      

    </Router>
  );
}

export default App;
