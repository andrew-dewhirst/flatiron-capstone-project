import React, { useState } from "react";

function NewRenovation({ user, handleNewRenovation }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [cost, setCost] = useState("");
  const [beforeImage, setBeforeImage] = useState("");
  const [duringImage, setDuringImage] = useState("");
  const [afterImage, setAfterImage] = useState("");
  const [description, setDescription] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/renovations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        location,
        room,
        cost,
        before_image: beforeImage,
        during_image: duringImage,
        after_image: afterImage,
        description,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((newRenovation) => handleNewRenovation(newRenovation));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="room">Room:</label>
      <input
        type="text"
        id="room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <label htmlFor="cost">Cost:</label>
      <input
        type="text"
        id="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <label htmlFor="beforeImage">Before Image:</label>
      <input
        type="text"
        id="beforeImage"
        value={beforeImage}
        onChange={(e) => setBeforeImage(e.target.value)}
      />
      <label htmlFor="duringImage">During Image:</label>
      <input
        type="text"
        id="duringImage"
        value={duringImage}
        onChange={(e) => setDuringImage(e.target.value)}
      />
      <label htmlFor="afterImage">After Image:</label>
      <input
        type="text"
        id="afterImage"
        value={afterImage}
        onChange={(e) => setAfterImage(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewRenovation