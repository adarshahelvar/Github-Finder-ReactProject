import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Navbar/>
    </Router>
  );
}

export default App;
