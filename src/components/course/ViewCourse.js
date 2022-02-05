import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";

export default function ViewCourse() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  //   const getData = (id) => {
  //     const res = axios.get(
  //       "https://www.full-stack-app.com/services/public/api/students/" + id
  //     );
  //     setDetail(res.data);
  //     console.log(detail);
  //   };
  const getData = async () => {
    await fetch(
      "https://www.full-stack-app.com/services/public/api/students/" + id
    )
      .then((res) => res.json())
      .then((result) => setDetail(result.student));
    console.log(detail);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      <h1>Student Detail ID : {id}</h1>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h4 className="card-title">Name : {detail.name}</h4>
            </div>
            <div className="col-md-6">
              <h4 className="card-title">Course : {detail.course}</h4>
            </div>
            <div className="col-md-6">
              <h4 className="card-title">Email : {detail.email}</h4>
            </div>
            <div className="col-md-6">
              <h4 className="card-title">Phone : {detail.phone}</h4>
            </div>
            <div className="col-md-6">
              <h4 className="card-title">
                Created at :{" "}
                <Moment format="DD/MM/YYYY">{detail.created_at}</Moment>
              </h4>
            </div>
            <div className="col-md-6">
              <h4 className="card-title">
                Update at :{" "}
                <Moment format="DD/MM/YYYY">{detail.updated_at}</Moment>
              </h4>
            </div>
            <div className="col-md-12">
                <div className="form-group mt-2 float-end">
                  <Link to="/course" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
