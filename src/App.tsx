import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((err) => setError(err.message))
  }, []);

  return (
    <>
      <p className="text-danger">{error}</p>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
