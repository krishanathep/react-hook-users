import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/users";
import Blog from "./components/blogs/blogList";
import NavBar from "./components/NavBar";
import Detail from './components/Home/Detail'
import CourseList from './components/course/CourseList'
import AddCourse from './components/course/AddCourse'
import EditCourse from './components/course/EditCourse'
import ViewCourse from './components/course/ViewCourse'
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
          <Route path="/course" element={<CourseList/>} />
          <Route path="/addcourse" element={<AddCourse/>} />
          <Route path="/editcourse/:id" element={<EditCourse/>} />
          <Route path="/viewcourse/:id" element={<ViewCourse/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
