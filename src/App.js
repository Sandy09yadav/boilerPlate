import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import About from './screen/about/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
