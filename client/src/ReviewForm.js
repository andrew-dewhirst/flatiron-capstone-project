import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
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


function ReviewForm({ user, cards, reviews, handleNewReview }) {

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
        card_id: 1,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => handleNewReview(newReview));
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
          Add A Review
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
              <Button onClick={handleSubmit}>Submit Review</Button>
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default ReviewForm