import React, {useState} from "react";

function MyRenovationCard({ renovation, handleRenovationDelete, handleUpdateRenovation }) {
  const title = renovation.reviews.map((review) => review.title);
  const description = renovation.reviews.map((review) => review.description);
  const rating = renovation.reviews.map((review) => review.rating);

  const [editTitle, setEditTitle] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editRoom, setEditRoom] = useState("");
  const [editCost, setEditCost] = useState("");
  const [editDescription, setEditDescription] = useState("");

    function handleDeleteClick() {
      fetch(`/renovations/${renovation.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          handleRenovationDelete(renovation.id);
        }
      });
    }

    function handleSubmit() {
      fetch(`/renovations/${renovation.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          title: editTitle,
          location: editLocation,
          room: editRoom,
          cost: editCost,
          description: editDescription,
         }),
      })
        .then((r) => r.json())
        .then((updatedRenovation) => {
          handleUpdateRenovation(updatedRenovation);
        });
    }

  return (
    <ul className="card">
      <h4>Title: {renovation.title}</h4>
      <h4>Location: {renovation.location}</h4>
      <h4>Room: {renovation.room}</h4>
      <h4>Cost: ${renovation.cost}</h4>
      <img src={renovation.before_image} alt="Not Available" />
      <img src={renovation.during_image} alt="Not Available" />
      <img src={renovation.after_image} alt="Not Available" />
      <h4>Likes: {renovation.likes}</h4>
      <button onClick={handleDeleteClick}>Remove Renovation</button>
      <h4>Reviews:</h4>
      <p>Title: {title.map((title) => <ol>{title}</ol>)}</p>
      <p>Description: {description.map((description) => <ol>{description}</ol>)}</p>
      <p>Rating: {rating.map((rating) => <ol>{rating}</ol>)}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="editTitle">Title:</label>
        <input
          type="text"
          id="editTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="editLocation">Location:</label>
        <input
          type="text"
          id="editLocation"
          value={editLocation}
          onChange={(e) => setEditLocation(e.target.value)}
        />
        <label htmlFor="editRoom">Room:</label>
        <input
          type="text"
          id="editRoom"
          value={editRoom}
          onChange={(e) => setEditRoom(e.target.value)}
        />
        <label htmlFor="editCost">Cost:</label>
        <input
          type="text"
          id="editCost"
          value={editCost}
          onChange={(e) => setEditCost(e.target.value)}
        />
        <label htmlFor="editDescription">Description:</label>
        <input
          type="text"
          id="editDescription"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </ul>
  );
}

export default MyRenovationCard