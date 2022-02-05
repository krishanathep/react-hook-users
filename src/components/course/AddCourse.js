import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//import axios from "axios";
import Swal from "sweetalert2";

export default function AddCourse() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      course: course,
      email: email,
      phone: phone,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    //console.log(data);

    fetch(
      "https://www.full-stack-app.com/services/public/api/add-student",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been created",
            showConfirmButton: false,
            timer: 1500,
          });
          history("/course");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });

          setName("");
          setCourse("");
          setEmail("");
          setPhone("");
        }
      });
    //   axios
    //     //.post("http://localhost/laravel-react-crud/public/api/add-student", data)
    //     .post(
    //       "https://www.full-stack-app.com/services/public/api/add-student",
    //       data
    //     )
    //     .then((res) => {
    //       if (res.data.status === 200) {
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: "Your work has been created",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //         history("/course");
    //       } else {
    //         //console.log(res.data.status);
    //         Swal.fire({
    //           position: "center",
    //           icon: "error",
    //           title: "Something went wrong!",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });

    //         setName("");
    //         setCourse("");
    //         setEmail("");
    //         setPhone("");
    //       }
    //     });
  };

  return (
    <div>
      <h1>Student Create</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    type="text"
                    className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter Student Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="couse">Cousre</label>
                  <input
                    value={course}
                    type="text"
                    className="form-control"
                    onChange={(event) => setCourse(event.target.value)}
                    placeholder="Enter Student Course"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    value={email}
                    type="text"
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter Student Email"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    value={phone}
                    type="text"
                    className="form-control"
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter Student Phone"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mt-2 float-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>{" "}
                  <Link to="/course" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
