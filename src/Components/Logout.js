import React, { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function Logout() {
  const { userName, password, setShow } = useContext(LoginContext);
  return (
    <div>
      <h1>Username is : {userName}</h1>
      <h1>password is : {password}</h1>
      <button onClick={() => setShow(false)}>Logout</button>
    </div>
  );
}

export default Logout;
