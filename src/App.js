import "./App.css";
import { useState } from "react";
import Logout from "./Components/Logout";
import Login from "./Components/Login";
import { LoginContext } from "./Components/Contexts/LoginContext";

function App() {
  const [show, setShow] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider
        value={{ setShow, userName, setUsername, password, setPassword }}
      >
        {show ? <Logout /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
