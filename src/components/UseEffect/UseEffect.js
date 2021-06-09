import React, { useEffect, useState } from "react";
import Fetch from "./Fetch";

function UseEffect() {
  const [name, setName] = useState("John");
  const [admin, setAdmin] = useState(false);

  // without dependency array useEffect will fire every time the state changes
  // with empty dependency array useEffect will only fire once - on first render)
  // dependency array [name] - useEffect will fire every time the name changes
  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <div>
      <h1>UseEffect()</h1>
      <div className="bordered">
        <p>Congrats, {name}</p>
        <button onClick={() => setName("Will")}>ChangeName</button>
        <p>{admin ? "logged in" : "not logged in"}</p>
        <button onClick={() => setAdmin(true)}>Log in</button>
      </div>
      <div className="bordered">
        <p>Fetch data from github api (commented out)</p>
        {/* <Fetch /> */}
      </div>
    </div>
  );
}

export default UseEffect;
