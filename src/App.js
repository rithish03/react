import logo from './logo.svg';
import './App.css';
// import PropsComponent from './functionalComponent/PropsComponent';
// import StateComponent from './classComponent/StateComponent';
import NavBar from "./functionalComponent/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './functionalComponent/About';
import Home from './functionalComponent/Home';
import Experience from './functionalComponent/Experience';
import Footer from './functionalComponent/footer.jsx';
import Reference from './functionalComponent/Reference.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path ="/experience" element={<Experience />}></Route>
          <Route path ="/ref" element={<Reference/>}></Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        {/* <PropsComponent name="Kongu" course="MERN" /> */}
        {/* <StateComponent /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
    
  );
  
}

export default App;
