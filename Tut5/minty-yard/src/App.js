import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />

      {/* the content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
