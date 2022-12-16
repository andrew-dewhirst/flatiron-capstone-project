import React, { useEffect, useState, useContext } from "react";
import { MyContext } from './Context'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import OrderForm from './OrderForm';
import Confirmation from './Confirmation';

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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const theme = createTheme();

export default function Checkout() {
  const contextData = useContext(MyContext)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [country, setCountry] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expDate, setExpDate] = useState("")
  const [securityCode, setSecurityCode] = useState("")
  const [cart, setCart] = useState([])

  function handlePaymentClick() {
    fetch(`http://localhost:3000/carts/${contextData.user.cart.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        has_converted: !contextData.user.cart.has_converted,
      }),
   })
      .then((r) => r.json())
      .then((updatedCart) => console.log(updatedCart));
}

  console.log(cart)

  useEffect(() => {
    fetch(`/carts/${contextData.user.cart.id}`)
      .then((r) => r.json())
      .then((cart) => setCart(cart));
  }, []);

  console.log(cart)

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm setFirstName={setFirstName} setLastName={setLastName} setAddress1={setAddress1} setAddress2={setAddress2} setCity={setCity} setState={setState} setZip={setZip} setCountry={setCountry}/>;
      case 1:
        return <PaymentForm setCardName={setCardName} setCardNumber={setCardNumber} setExpDate={setExpDate} setSecurityCode={setSecurityCode} />;
      case 2:
        return <OrderForm firstName={firstName} lastName={lastName} address1={address1} address2={address2} city={city} state={state} zip={zip} country={country} cardName={cardName} cardNumber={cardNumber} expDate={expDate} cart={cart} handlePaymentClick={handlePaymentClick}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation handlePaymentClick={handlePaymentClick}/>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}