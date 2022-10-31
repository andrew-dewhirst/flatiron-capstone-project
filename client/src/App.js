import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";
import MyRenovation from "./MyRenovation";
import Account from "./Account";
import Genre from "./Genre";
import CheckoutForm from "./CheckoutForm";

function App() {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
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
  }, {});

  useEffect(() => {
    fetch("/renovations")
      .then((r) => r.json())
      .then((renovation) => setRenovations(renovation));
  }, []);

  console.log(user.avatar)

  const cardsToDisplay = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleNewRenovation(newRenovation) {
    setRenovations([...renovations, newRenovation])
  };

  function handleRenovationDelete(deletedRenovation) {
    const updatedRenovations = renovations.filter((renovation) => renovation.id !== deletedRenovation)
    setRenovations(updatedRenovations);
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
      <Switch>
        <Route exact path="/">
            <Home user={user}/>
          </Route>
        <Route exact path="/myaccount">
          <Account user={user} avatar={user.avatar} />
        </Route>
        <Route exact path='/cards/:genre'>
          <Genre searchTerm={searchTerm} setSearchTerm={setSearchTerm} cardsToDisplay={cardsToDisplay} setCards={setCards} />
        </Route>
        <Route exact path='/checkout'>
          <CheckoutForm />
        </Route>
        <Route exact path="/renovations">
          <RenovationList renovations={renovations} user={user} handleUpdateRenovation={handleUpdateRenovation} />
        </Route>
        <Route exact path="/new_renovation">
          <NewRenovation user={user} renovations={renovations} handleNewRenovation={handleNewRenovation} />
        </Route>
        <Route exact path="/my_renovations">
          <MyRenovation user={user} renovations={renovations} handleRenovationDelete={handleRenovationDelete} handleUpdateRenovation={handleUpdateRenovation} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
