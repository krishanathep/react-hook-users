import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            ReactJS CRUD
          </Link>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="navbar-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li> */}
            <li className="navbar-item">
              <Link className="nav-link" to="/course">
                Students
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
