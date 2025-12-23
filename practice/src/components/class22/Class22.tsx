import { useState } from "react";

type User = {
  id: number;
  name: string;
  nationality: string;
  age: number;
};

function Class22() {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    nationality: "",
    age: 0,
  });

  console.log("users=>", users);
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsers([...users, { ...formData, id: Date.now() }]);
    setFormData({ name: "", nationality: "", age: 0 });
  };
  return (
    <div className="flex gap-4">
      <form onSubmit={handleAddUser} className="flex flex-col gap-2 flex-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter user name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border border-gray-300 rounded-md p-2"
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          placeholder="Enter user nationality"
          name="nationality"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
          className="border border-gray-300 rounded-md p-2"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Enter user age"
          name="age"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: Number(e.target.value) })
          }
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="btn btn-primary mt-8">
          Add User
        </button>
      </form>
      <div className="flex flex-col flex-1">
        <h1>Users</h1>
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-2 mt-4"
            >
              <p>Name: {user.name}</p>
              <p>Nationality: {user.nationality}</p>
              <p>Age: {user.age}</p>
            </div>
          ))
        ) : (
          <div className="mt-4">No users yet!</div>
        )}
      </div>
    </div>
  );
}

export default Class22;
