import React, { useContext } from "react";
import { MyContext } from './Context'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartReview() {
  const contextData = useContext(MyContext)

  const price = contextData.cart.map((card) => card.price)
  const cartTotal = price.map(Number)
  const totalPrice = cartTotal.reduce((a,b) => a + b, 0)

  function handleRemoveFromCartClick(id) {
    fetch(`/cards/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        contextData.handleUpdatedCart(id);
        contextData.handleLineItemDelete(id);
      }
    });
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cart summary
      </Typography>
      <List disablePadding>
        {contextData.cart.map((card, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={card.name} secondary={card.description} />
            <Typography variant="body2">${card.price}0</Typography>
            <IconButton aria-label="delete" onClick={()=>handleRemoveFromCartClick(card.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">
            $0.00
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}