import React, { useContext } from "react";
import { MyContext } from './Context'
import GooglePayItem from './GooglePayItem';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function OrderForm({ handlePaymentClick }) {
  const contextData = useContext(MyContext)

  const addresses = [contextData.address1, contextData.address2, contextData.city, contextData.state, contextData.zip, contextData.country];
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: `${contextData.cardName}` },
    { name: 'Card number', detail: `${contextData.cardNumber}` },
    { name: 'Expiry date', detail: `${contextData.expDate}` },
  ];

  const price = contextData.cart.map((card) => card.price)
  const cartTotal = price.map(Number)
  const totalPrice = cartTotal.reduce((a,b) => a + b, 0)


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {contextData.cart.map((card, index) => (
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
          <Typography gutterBottom>{contextData.firstName} {contextData.lastName}</Typography>
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