import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { MyContext } from './Context'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import AppBar from "./AppBar";
import Home from "./Home";
import Account from "./Account";
import Genre from "./Genre";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

function App() {
  const contextData = useContext(MyContext)
  
  if (!contextData.user) return (
    <div> 
      {contextData.errors?.length !== 0 ? (
        <div>
          <Stack sx={{ width: '100%' }} spacing={2}>
            {contextData.errors.map((error, index) =>
            <Alert key={index} severity="error" onClose={() => contextData.setErrors([])}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>{error}</strong>
            </Alert>
            )}
          </Stack>
          <AppBar />
          <Switch>
            <Route exact path="/">
              <SignIn />;
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <SignIn />;
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
      </div>
      )}
    </div>
  )

  return (
    <div>
      <AppBar />
      <Box display='flex' justifyContent='flex-end'>
        <Button variant="contained" href="/" onClick={contextData.handleLogoutClick}>
          Logout
        </Button>
      </Box>
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/profile">
          <Account />
        </Route>
        <Route exact path='/cards/:genre'>
          <Genre /> 
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/reviews/:cardName'>
          <MyReviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
