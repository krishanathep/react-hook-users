import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditCouse() {
  const { id } = useParams();

  const history = useNavigate();

  const [editstudent, setEditStudent] = useState([]);

  const getData = async () => {
    await fetch(
      "https://www.full-stack-app.com/services/public/api/edit-student/" + id
    )
      .then((res) => res.json())
      .then((res) => setEditStudent(res.student));
    console.log(editstudent);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  function handleInput(event){
    event.persist()
    setEditStudent({
      ...editstudent, 
      [event.target.name]: event.target.value
    })
  }

async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: editstudent.name,
      course: editstudent.course,
      email: editstudent.email,
      phone: editstudent.phone,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    console.log(data);

   await fetch(
      "https://www.full-stack-app.com/services/public/api/update-student/" +id,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if(res.status===200){
          Swal.fire({
            position: "center",
            icon: "success",
            title: 'Success',
            text: "Your work has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          history("/course",{ replace: true });
        }else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      
    
  }

  return (
    <div>
      <h1>Student Update ID : {id}</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                  name="name"
                    value={editstudent.name}
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="couse">Cousre</label>
                  <input
                  name="course"
                    value={editstudent.course}
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                  name="email"
                    value={editstudent.email}
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                  name="phone"
                    value={editstudent.phone}
                    type="text"
                    className="form-control"
                    onChange={handleInput}
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
