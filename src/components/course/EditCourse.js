import React from "react";
import { Link } from 'react-router-dom'

export default function EditCouse() {
  return (
    <div>
      <h1>Student Update</h1>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    //value={name}
                    type="text"
                    className="form-control"
                    //onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="couse">Cousre</label>
                  <input
                    //value={course}
                    type="text"
                    className="form-control"
                    //onChange={(event) => setCourse(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    //value={email}
                    type="text"
                    className="form-control"
                    //onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    //value={phone}
                    type="text"
                    className="form-control"
                    //onChange={(event) => setPhone(event.target.value)}
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
