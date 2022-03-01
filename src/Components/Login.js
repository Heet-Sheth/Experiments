import React, { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function Login() {
  const { setUsername, setPassword, setShow } = useContext(LoginContext);
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => setShow(true)}>Login</button>
    </div>
  );
}

export default Login;
