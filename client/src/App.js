import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";
import MyRenovation from "./MyRenovation";

function App() {
  const [user, setUser] = useState(null);
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
    fetch("/renovations")
      .then((r) => r.json())
      .then((renovation) => setRenovations(renovation));
  }, []);


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
