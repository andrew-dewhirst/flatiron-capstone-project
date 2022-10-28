import React, { useEffect, useState } from "react";
import Login from "./Login";

function Account({ user, avatar }) {

  const [errors, setErrors] = useState([]);
  console.log(user.user)

  // if (!user) return (
  //   <div>
  //     <h3>{errors}</h3>
  //     <Login onLogin={setUser} setErrors={setErrors} />;
  //   </div>
  // )
  return (
    <div>
      Welcome Home {user.user.first_name} {user.user.last_name}!
    </div>
  );
};

export default Account