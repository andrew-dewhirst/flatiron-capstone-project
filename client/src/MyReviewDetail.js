import React from "react";
import { useParams } from 'react-router-dom';
import MyReviewCard from "./MyReviewCard";
import ReviewForm from "./ReviewForm";

function MyReviewDetail({ user, cards, reviews, handleNewReview }) {
  
  const params = useParams()

  const filteredCards = cards.filter((card) => card.name.toLowerCase() === params.cardName.toLowerCase())

  console.log(reviews)

  return (
    <React.Fragment>
      {filteredCards.map((card) =>
      <MyReviewCard
        key={card.id}
        card={card}
        />
       )}
      <ReviewForm user={user} cards={cards} reviews={reviews} handleNewReview={handleNewReview} />
    </React.Fragment>
  )
}

export default MyReviewDetail
