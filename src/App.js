
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home";
import About from "./components/Routes/About";
import Contact from "./components/Routes/Contact";
import Service from "./components/Routes/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/service" element={<Service />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
