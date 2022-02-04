import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import { Link } from "react-router-dom";

export default function CourseList() {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    //fetch("http://localhost/laravel-react-crud/public/api/students")
    fetch('https://www.full-stack-app.com/services/public/api/students')
      .then((res) => res.json())
      .then((res) => setStudents(res.students));
    console.log(students);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="float-start">Students List</h1>
          <Link
            to="/addcourse"
            className="btn btn-success btn-sm float-end mt-3"
          >
            New Students
          </Link>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr align='center'>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Create At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td align="center">{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td><Moment format="DD/MM/YYYY">{student.created_at}</Moment></td>
                  <td align="center">
                    <Link to={'/viewcourse/'+ student.id} className="btn btn-info btn-sm">View</Link>{" "}
                    <Link to={'/editcourse/'+ student.id} className="btn btn-primary btn-sm">Update</Link>{" "}
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
