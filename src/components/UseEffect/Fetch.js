import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      //   .then((res) => setData(res));
      .then(setData) // shortcut
      .then(console.log("updated"));
  }, []);

  if (data) {
    return (
      <div>
        <button onClick={() => setData([])}>RemoveData</button>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <p>No users</p>;
}

export default Fetch;
