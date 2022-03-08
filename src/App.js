import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedSliders from './component/LinkedSliders';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkedSliders
          id={1}
          sum={800}
          updateContributions={()=>{ } }
          contributions={ [
            { userId: 8, name: 'MGM', value: 200 },
            { userId: 9, name: 'MSM', value: 200 },
            { userId: 11, name: 'MM', value: 200 },
            { userId: 89, name: 'MBM', value: 200 }
            ]}

          />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
