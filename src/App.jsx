import Home from './components/functionalComponents/Home';
import About from './components/functionalComponents/About';
import Learningreact from './components/functionalComponents/Learningreact';
import Contact from './components/functionalComponents/Contact';
import Login from './Login';
import Signup from './Signup';
import UseState from './components/functionalComponents/Hooks/UseState';
import UseEffect from './components/functionalComponents/Hooks/UseEffect';
import UseMemo from './components/functionalComponents/Hooks/UseMemo';
import UseEffectAPI from './components/functionalComponents/Hooks/UseEffectAPI';
import UseRef from './components/functionalComponents/Hooks/UseRef';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/App.css";
import Navbar from "./components/functionalComponents/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learningreact" element={<Learningreact />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/useeffectapi" element={<UseEffectAPI />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;