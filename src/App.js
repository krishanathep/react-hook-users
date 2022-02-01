import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/users";
import Blog from "./components/blogs/blogList";
import NavBar from "./components/NavBar";
import Detail from './components/Home/Detail'
import './index.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/users" element={<User />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
