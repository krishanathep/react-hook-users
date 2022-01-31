import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
import User from './components/users/userList'
import Blog from './components/blogs/blogList'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Users</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path='/'element={<User/>} />
        <Route path='/blogs' element={<Blog/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
