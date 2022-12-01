import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";
import MyRenovation from "./MyRenovation";
import Account from "./Account";
import Cart from "./Cart";
import Genre from "./Genre";
import CheckoutForm from "./CheckoutForm";

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [lineItems, setLineItems] = useState([]);
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [renovations, setRenovations] = useState([]);
  const [errors, setErrors] = useState([]);

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
      <NavBar />
      <Login onLogin={setUser} setErrors={setErrors} />;
    </div>
  )

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <button type="button" onClick={handleLogoutClick}>
          Logout
     </button>
     <Cart lineItems={lineItems} user={user}/>
      <Switch>
        <Route exact path="/">
            <Home user={user}/>
          </Route>
        <Route exact path="/myaccount">
          <Account user={user} avatar={user.avatar} />
        </Route>
        <Route exact path='/cards/:genre'>
          <Genre cart={user.cart} lineItems={user.line_items} searchTerm={searchTerm} setSearchTerm={setSearchTerm} cardsToDisplay={cardsToDisplay} setCards={setCards} handleAddLineItem={handleAddLineItem} handleLineItemDelete={handleLineItemDelete} />
          
        </Route>
        <Route exact path='/checkout'>
          <CheckoutForm user={user} cards={cards} cart={user.cart}/>
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
