import * as React from 'react';
import { useHistory } from "react-router-dom";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import MyReviewDetail from './MyReviewDetail';

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "black"
  }
};

export default function MyReviewList({ reviewedCards, user }) {
  let history = useHistory();

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

  const uniqueIds = []
  const uniqueCards = reviewedCards?.map((cart) => cart.filter(card => {
    const isDuplicate = uniqueIds.includes(card.id);

    if (!isDuplicate) {
      uniqueIds.push(card.id);

      return true;
    }

    return false;
  }))

  const handleGoToReviews = (event) => {
    event.preventDefault();
    let cardName = event.target.innerText;
    history.push(`/reviews/${cardName}`);
  }

  return (
    <React.Fragment>
      <Title>My Reviews</Title>
      {uniqueCards?.map((cart) => {
        return (
         <div>
          {cart?.map((card) =>{
            return (
              <button onClick={handleGoToReviews}>{card.name}</button>
            )
          })}
          </div>
          )
        })} 
    </React.Fragment>    
  );
}


