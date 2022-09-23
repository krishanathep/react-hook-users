import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const userFetch = async() => {
    try {
      setLoading(true);
     await fetch("https://www.melivecode.com/api/users")
        .then((res) => res.json())
        .then((result) => {
          setUsers(result);
        });
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userFetch();
  }, []);

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

  if (errors) {
    return (
      <div className="mt-5" align="center">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Users List</h1>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>F Name</th>
            <th>L Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={user.avatar}
                  class="rounded-circle"
                  alt="Cinque Terre"
                  width={50}
                />
              </td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
