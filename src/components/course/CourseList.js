import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import {
  BsFillEyeFill,
  BsPencilSquare,
  BsTrash,
  BsFillPlusCircleFill,
} from "react-icons/bs";

export default function CourseList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      await fetch("https://www.full-stack-app.com/services/public/api/students")
        .then((res) => res.json())
        .then((res) => setStudents(res.students));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deletdStudent(e, id) {
    e.preventDefault();
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://www.full-stack-app.com/services/public/api/delete-student/${id}`,
            { method: "DELETE" }
          )
            .then((res) => res.json())
            .then((res) => console.log(res.student));

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(function () {
            window.location.reload();
          }, 1500);
        } else {
          console.log(error);
        }
      });
    } catch (error) {
      setError(error);
    }
  }

  if (loading === true) {
    return (
      <div className="mt-5" align="center">
        <ReactLoading
          type="spin"
          color="#6495ED"
          height={"20%"}
          width={"20%"}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5" align="center">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="float-start">Students List</h1>
          <Link
            to="/addcourse"
            className="btn btn-success btn-sm float-end mt-3"
          >
            <BsFillPlusCircleFill /> New Students
          </Link>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr align="center">
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
                  <td>
                    <Moment format="DD/MM/YYYY">{student.created_at}</Moment>
                  </td>
                  <td align="center">
                    <Link
                      to={"/viewcourse/" + student.id}
                      className="btn btn-info text-light btn-sm"
                    >
                      <BsFillEyeFill />
                    </Link>{" "}
                    <Link
                      to={"/editcourse/" + student.id}
                      className="btn btn-primary btn-sm"
                    >
                      <BsPencilSquare />
                    </Link>{" "}
                    <button
                      type="button"
                      onClick={(e) => deletdStudent(e, student.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <BsTrash />
                    </button>
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
