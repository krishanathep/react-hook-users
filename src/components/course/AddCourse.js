import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

    console.log(data);

    axios
      .post("http://localhost/laravel-react-crud/public/api/add-student", data)
      .then((res) => {
        if (res.data.status === 200) {
          //toast.success('เพิ่มข้อมูลเรียบร้อยแล้ว')
          //console.log("เพิ่มข้อมูลเรียบร้อยแล้ว");
          history("/course");
        } else {
          console.log(res.data.status);
          toast.error("Something Went Wrong!");

          setName("");
          setCourse("");
          setEmail("");
          setPhone("");
        }
      });
  };

  return (
    <div>
      <h1>Create new Course</h1>
      <ToastContainer />
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
  );
}
