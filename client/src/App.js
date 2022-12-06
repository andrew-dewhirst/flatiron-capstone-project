import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from "./AppBar";
import Home from "./Home";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";
import MyRenovation from "./MyRenovation";
import Account from "./Account";
import Genre from "./Genre";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [lineItems, setLineItems] = useState([]);
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [renovations, setRenovations] = useState([]);
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

  function handleUpdateRenovation(updatedRenovation) {
    const updatedRenovationArray = renovations.map((renovation) => {
      return renovation.id === updatedRenovation.id ? updatedRenovation : renovation;
    });
    setRenovations(updatedRenovationArray);
  }

  if (!user) return (
    <div>
      <h3>{errors}</h3>
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
  )

  return (
    <div>
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
        <Route exact path="/renovations">
          <RenovationList renovations={renovations} user={user} handleUpdateRenovation={handleUpdateRenovation} />
        </Route>
        {/* <Route exact path="/new_renovation">
          <NewRenovation user={user} renovations={renovations} handleNewRenovation={handleNewRenovation} />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
