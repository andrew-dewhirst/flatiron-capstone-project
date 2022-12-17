import React, { useContext } from 'react';
import { MyContext } from './Context'
import { useParams } from 'react-router-dom';
import MyReviewCard from "./MyReviewCard";
import MyReviewForm from "./MyReviewForm";

function MyReviews() 
{
  const contextData = useContext(MyContext)
  
  const params = useParams()

  const filteredCards = contextData.cards.filter((card) => card.name.toLowerCase() === params.cardName.toLowerCase())

  return (
    <div className='test'>
      {filteredCards.map((card) =>
      <MyReviewCard
        key={card.id}
        card={card}
        handleDeletedReview={contextData.handleDeletedReview}
        handleUpdatedReview={contextData.handleUpdatedReview}
        />
       )}
      <MyReviewForm />
    </div>
  )
}

export default MyReviews