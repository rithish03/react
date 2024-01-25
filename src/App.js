import logo from './logo.svg';
import './App.css';
import PropsComponent from './functionalComponent/PropsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropsComponent name = "Kongu" course = "MERN" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
