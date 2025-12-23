import { useState } from "react";

function Class27() {
  const [users, setUsers] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("error=>", error);
    }
  };

  return (
    <div>
      <h1>class 27 (getting users from server)</h1>
      <button className="btn btn-primary" onClick={fetchProducts}>
        Fetch Products
      </button>
      <p>{users.length} users fetched</p>
    </div>
  );
}

export default Class27;
