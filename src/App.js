import logo from './logo.svg';
import Home from './components/pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Day from './components/Day';
import { useEffect } from 'react';

function App() {
  useEffect(() => {document.body.style.backgroundColor="#0C001C"})
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='Home'>
      <Home/>
      <Day/>
    </div>
    
    );
}

export default App;
