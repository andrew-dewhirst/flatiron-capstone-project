import React from "react";

function Account({ user }) {
  return (
    <div>
      Welcome Home {user.first_name} {user.last_name}!
    </div>
  );
};

export default Account