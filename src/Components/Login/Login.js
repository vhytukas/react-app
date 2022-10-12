import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  
  const [password, setPassword] = useState();
  const history = useHistory();
 

  const loginHandler = () => {
    if (password === "1") {
      localStorage.setItem("isLoggedIn", "1");
      history.push("/starwars");
      
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        onChange={handleChange}
        placeholder="Enter Password"
        name="psw"
        required
      />
      <button type="submit" onClick={loginHandler}>
        Go
      </button>
    </div>
  );
};

export default Login;
