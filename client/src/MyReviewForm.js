import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import { AiFillStar } from 'react-icons/ai';
import Button from '@mui/material/Button';

const ratings = [
  {
    value: '1',
    label: <AiFillStar />,
  },
  {
    value: '2',
    label: <div><AiFillStar /> <AiFillStar /> </div>,
  },
  {
    value: '3',
    label: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> </div>,
  },
  {
    value: '4',
    label: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </div>,
  },
  {
    value: '5',
    label: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </div>,
  },
]


function MyReviewForm({ user, cards, reviews, handleNewReview }) {
  
  const params = useParams()
  const filteredCards = cards.filter((card) => card.name.toLowerCase() === params.cardName.toLowerCase())
  const cardId = filteredCards.map((card) => card.id)
  console.log(cardId[0])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        rating: rating,
        card_id: cardId[0],
      }),
    })
      .then((r) => r.json())
      .then((newReview) => handleNewReview(newReview));
  }

  return (
    <React.Fragment>
        <Grid container direction="column" columns={16} spacing={3} sx={{mx: 'auto', my: 'auto', width: 400 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Add A Review
          </Typography>
          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              id="userName"
              name="userName"
              label="User name"
              fullWidth
              autoComplete="given-name"
              variant="filled"
              defaultValue={user.username}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="description"
              variant="outlined"
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="rating"
              select
              name="rating"
              label="Rating"
              fullWidth
              autoComplete="rating"
              variant="outlined"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {ratings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
              <Typography align="center">
                <Button onClick={handleSubmit}>Submit Review</Button>
              </Typography>
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default MyReviewForm