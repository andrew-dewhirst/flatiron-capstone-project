import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

function CardList({ cart, lineItems, filteredCards, cardsToDisplay, setCards, handleAddLineItem, handleLineItemDelete }) {

  console.log(filteredCards)

  return (
    <div class = "container">
      {filteredCards.map((card) =>
        <CardInfo
          key={card.id}
          card={card}
          cart={cart}
          lineItems={card.line_items}
          handleAddLineItem={handleAddLineItem}
          handleLineItemDelete={handleLineItemDelete}
        />
      )}
      <Copyright />
    </div>
  );
}

export default CardList