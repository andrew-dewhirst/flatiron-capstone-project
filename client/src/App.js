import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import People from "./People"

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [lineItems, setLineItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/cards")
      .then((r) => r.json())
      .then((card) => setCards(card));
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((review) => setReviews(review));
  }, []);

  useEffect(() => {
    fetch("/line_items")
    .then((r) => r.json())
    .then((lineItem) => setLineItems(lineItem))
  }, [])

  const cardsToDisplay = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      history.push(`/`);
    });
  }

  function handleAddLineItem(newLineItem) {
    setLineItems([...lineItems, newLineItem])
  };

  function handleLineItemDelete(deletedLineItem) {
    const updatedLineItems = lineItems.filter((lineItem) => lineItem.id !== deletedLineItem)
    setLineItems(updatedLineItems);
  }

  function handleUpdatedReview(updatedReview) {
    const updatedReviewArray = reviews.map((review) => {
      return review.id === updatedReview.id ? updatedReview : review;
    });
    setReviews(updatedReviewArray);
  }

  function handleDeletedReview(deletedReview) {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview)
    setReviews(updatedReviews);
  }

  function handleNewReview(newReview) {
    setReviews([...reviews, newReview])
  };

  if (!user) return (
    <div>
      {errors?.length !== 0 ? (
        <div>
          <Stack sx={{ width: '100%' }} spacing={2}>
            {errors.map((error, index) =>
            <Alert key={index} severity="error" onClose={() => setErrors([])}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>{error}</strong>
            </Alert>
            )}
          </Stack>
          <AppBar user={user} lineItems={lineItems}/>
          <Switch>
            <Route exact path="/">
              <SignIn onLogin={setUser} setErrors={setErrors} />;
            </Route>
            <Route exact path="/signup">
              <SignUp onLogin={setUser} setErrors={setErrors} />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
      <AppBar user={user} lineItems={lineItems}/>
      <Switch>
        <Route exact path="/">
          <SignIn onLogin={setUser} setErrors={setErrors} />;
        </Route>
        <Route exact path="/signup">
          <SignUp onLogin={setUser} setErrors={setErrors} />
        </Route>
      </Switch>
      </div>
      )}
    </div>
  )

  return (
    <div>
      <People />
      <AppBar user={user} lineItems={lineItems}/>
      <Box display='flex' justifyContent='flex-end'>
        <Button variant="contained" href="/" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Box>
      <Switch>
        <Route exact path="/">
            <Home user={user}/>
          </Route>
        <Route exact path="/profile">
          <Account user={user} avatar={user.avatar} />
        </Route>
        <Route exact path='/cards/:genre'>
          <Genre cart={user.cart} lineItems={user.line_items} searchTerm={searchTerm} setSearchTerm={setSearchTerm} cardsToDisplay={cardsToDisplay} setCards={setCards} handleAddLineItem={handleAddLineItem} handleLineItemDelete={handleLineItemDelete} /> 
        </Route>
        <Route exact path='/checkout'>
          <Checkout user={user} cart={user.cart}/>
        </Route>
        <Route exact path='/reviews/:cardName'>
          <MyReviews user={user.user} cards={cards} reviews={reviews} handleNewReview={handleNewReview} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
