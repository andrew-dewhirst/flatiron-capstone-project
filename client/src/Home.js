import React from "react";

function Home({ user }) {
  return (
    <div>
      Welcome Home {user?.user?.first_name} {user?.user?.last_name}!
    </div>
  );
};

export default Home