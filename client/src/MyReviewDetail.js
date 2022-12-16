import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { AiFillStar } from 'react-icons/ai';

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

function MyReviewDetail({ review, handleDeletedReview, handleUpdatedReview }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDeleteClick() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        handleDeletedReview(review.id);
      }
    });
  }

  function handleEditClick() {
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        title: title,
        description: description,
        rating: rating,
       }),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        handleUpdatedReview(updatedReview);
      });
  }

  return (
    <React.Fragment>
      <Typography display="block" key={review.id}>
        Title: {review.title}
      </Typography>
      <Typography display ="block">
        Description: {review.description}
      </Typography>
      <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} readOnly />
      <Grid>
        <Button onClick={handleDeleteClick}>Delete</Button>
        <Button onClick={handleClickOpen}>Edit</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Submit Your Updates to Your Review
            </DialogContentText>
            <TextField
              disabled
              autoFocus
              margin="dense"
              id="reviewId"
              label="Review ID"
              type="reviewId"
              fullWidth
              variant="filled"
              defaultValue={review.id}
            />
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="title"
              fullWidth
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="description"
              fullWidth
              variant="standard"
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="rating"
              select
              label="Rating"
              type="rating"
              fullWidth
              variant="standard"
              defaultValue={review.rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {ratings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClick}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Typography display="block">
        ---------------------------------------------------------
      </Typography>
    </React.Fragment>
  )
}

export default MyReviewDetail


