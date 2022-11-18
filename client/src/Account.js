import React, { useEffect, useState } from "react";
import Login from "./Login";

function Account({ user, avatar }) {

  const [errors, setErrors] = useState([]);
  console.log(user.user)
  console.log(user)
  const [itemCount, setItemCount] = useState(0);

  // if (!user) return (
  //   <div>
  //     <h3>{errors}</h3>
  //     <Login onLogin={setUser} setErrors={setErrors} />;
  //   </div>
  // )
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h3>Welcome Home {user?.user?.first_name} {user?.user?.last_name}!</h3>
    </div>
  );
}

export default Account
