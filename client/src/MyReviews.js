import React from "react";
import { useParams } from 'react-router-dom';
import MyReviewCard from "./MyReviewCard";
import MyReviewForm from "./MyReviewForm";

function MyReviews({ user, cards, reviews, handleNewReview, handleDeletedReview, handleUpdatedReview }) {
  
  const params = useParams()

  const filteredCards = cards.filter((card) => card.name.toLowerCase() === params.cardName.toLowerCase())

  return (
    <div className='test'>
      {filteredCards.map((card) =>
      <MyReviewCard
        key={card.id}
        card={card}
        handleDeletedReview={handleDeletedReview}
        handleUpdatedReview={handleUpdatedReview}
        />
       )}
      <MyReviewForm user={user} cards={cards} reviews={reviews} handleNewReview={handleNewReview} />
    </div>
  )
}

export default MyReviews