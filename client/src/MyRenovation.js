import React from "react";
import MyRenovationCard from "./MyRenovationCard";

function MyRenovation({ user, renovations, handleRenovationDelete, handleUpdateRenovation }) {

  const userRenovations = renovations.filter((renovation) => renovation.user_id === user.id) 

  return (
    <ul className="cards">
      {userRenovations.map((renovation) =>
      <MyRenovationCard
        key={renovation.id}
        renovation={renovation}
        handleRenovationDelete={handleRenovationDelete}
        handleUpdateRenovation={handleUpdateRenovation}
      />
      )}
    </ul>
  )
};

export default MyRenovation

