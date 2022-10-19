import React from "react";

function Home({ user }) {
  return (
    <div>
      Welcome Home {user.first_name} {user.last_name}!
    </div>
  );
};

export default Home