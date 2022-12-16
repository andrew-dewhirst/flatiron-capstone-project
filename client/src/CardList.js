import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { MyContext } from './Context'
import CardInfo from "./CardInfo";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Card Collector Emporium
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function CardList() {
  const contextData = useContext(MyContext)
  const params = useParams()

  const filteredCards = contextData.cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  return (
    <div className = "container">
      {filteredCards.map((card) =>
        <CardInfo
          key={card.id}
          card={card}
          lineItems={card.line_items}
          handleAddLineItem={contextData.handleAddLineItem}
          handleLineItemDelete={contextData.handleLineItemDelete}
        />
      )}
      <Copyright />
    </div>
  );
}

export default CardList