import React from "react";
import GooglePayItem from './GooglePayItem';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function OrderForm({ firstName, lastName, address1, address2, city, state, zip, country, cardName, cardNumber, expDate, cart, handlePaymentClick }) {

  const addresses = [address1, address2, city, state, zip, country];
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: `${cardName}` },
    { name: 'Card number', detail: `${cardNumber}` },
    { name: 'Expiry date', detail: `${expDate}` },
  ];

  const price = cart.map((card) => card.price)
  const cartTotal = price.map(Number)
  const totalPrice = cartTotal.reduce((a,b) => a + b, 0)


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((card, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={card.name} secondary={card.description} />
            <Typography variant="body2">${card.price}0</Typography>
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName} {lastName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <GooglePayItem handlePaymentClick={handlePaymentClick} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}