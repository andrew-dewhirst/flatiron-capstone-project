import React, { useContext } from "react";
import { MyContext } from './Context'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

const theme = createTheme();

export default function CardInfo({ lineItems, card, handleCheckoutClick, handleAddLineItem, handleLineItemDelete }) {
  // cart, 

  const contextData = useContext(MyContext)

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>

      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

function handleAddToCartClick() {
  fetch("/line_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_id: card.id,
      cart_id: contextData.user.cart.id,
      quantity: 1,
    }),
  })
    .then((r) => r.json())
    .then((newLineItem) => handleAddLineItem(newLineItem))
    .then(setOpen(true));
}

function handleRemoveFromCartClick() {
  fetch(`/cards/${card.id}`, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      handleLineItemDelete(card.id);
    }
  });
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 6 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={0} >
              <Grid item key={card} xs={10} sm={12} md={10} >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography>
                      ${card.price}0
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={handleAddToCartClick} size="small">Add to Cart</Button>
                    <Button onClick={handleRemoveFromCartClick} size="small">Remove from Cart</Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Added to Cart"
                      action={action}
                    />
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      </Box>
    </ThemeProvider>
  );
}