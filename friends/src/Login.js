import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useState({
    credentials: { username: "", password: "" },
  });

  handleChange = () => {
    setLogin({
      credentials: { ...login.credentials, [e.target.name]: e.target.value },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
    .post("", login.credentials)
    .then((res) => {
        localStorage.setItem("", )
    })
    .catch((err) => console.log(err))
  }

  return (
    <form onSubmit="">
      <input name="username" value="" placeholder="Username"></input>
      <input name="password" value="" placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
