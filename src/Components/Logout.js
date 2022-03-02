import React, { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function Logout() {
  const { userName, password, setShow } = useContext(LoginContext);
  return (
    <div>
      <h3>Username is : {userName}</h3>
      <h3>password is : {password}</h3>
      <button onClick={() => setShow(false)}>Logout</button>
    </div>
  );
}

export default Logout;
