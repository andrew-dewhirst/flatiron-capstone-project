import * as React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Title from './Title';

export default function MyReviewList({ reviewedCards }) {
  let history = useHistory();

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
      {uniqueCards?.map((cart, index) => {
        return (
         <div key={index}>
          {cart?.map((card, index) =>{
            return (
              <Button key={index} size="small" color="inherit" onClick={handleGoToReviews}>{card.name}</Button>
            )
          })}
          </div>
          )
        })} 
    </React.Fragment>    
  );
}

