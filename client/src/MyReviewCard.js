import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import MyReviewDetail from "./MyReviewDetail";

export default function MyReviewCard({ card, handleDeletedReview, handleUpdatedReview }) {
  const totalRating = card.reviews.map((review) => review.rating)
  const averageRating = totalRating.reduce((a,b) => a + b, 0)/totalRating.length

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <React.Fragment>
          <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.genre}
              </Avatar>
            }
            title={card.name}
          />
          <CardMedia
            component="img"
            height="194"
            image={card.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Typography component="legend">Average Rating</Typography>
            <Rating name="half-rating-read" defaultValue={averageRating} precision={0.5} readOnly /> 
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {card.reviews.map((review) =>
                <MyReviewDetail
                  key={review.id}
                  review={review}
                  handleDeletedReview={handleDeletedReview}
                  handleUpdatedReview={handleUpdatedReview}
                />
              )}
            </CardContent>
          </Collapse>
        </Card>
    </React.Fragment>
  );
}