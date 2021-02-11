import React from "react";
import Input from "./Input";

function Login(params) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!params.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {params.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
