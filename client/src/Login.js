import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Login({ onLogin, setErrors }) {

  return (
    <div>
      <h2>Welcome to Renov8!</h2>
      <h4>Share and view renovations from around the world!</h4>
      <SignupForm onLogin={onLogin} setErrors={setErrors} />
      <LoginForm onLogin={onLogin} setErrors={setErrors} />
    </div>
  )
}

export default Login