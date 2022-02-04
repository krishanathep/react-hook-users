import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CourseList() {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    fetch("http://localhost/laravel-react-crud/public/api/students")
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
          <h1 className="float-start">Course List</h1>
          <Link
            to="/addcourse"
            className="btn btn-success btn-sm float-end mt-3"
          >
            Create Course
          </Link>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
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
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.created_at}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Update</button>{" "}
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
