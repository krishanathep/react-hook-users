import React,{useState,useEffect} from "react";

export default function UserList() {
    
  const [users, setUsers] = useState([]);

  const userFetch = () => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  useEffect(() => {
    userFetch();
  },[]);
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
              <td><img src={user.avatar} class="rounded-circle" alt="Cinque Terre" width={50} /></td>
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
