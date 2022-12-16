import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const MyContext = React.createContext()



const MyProvider = (props) => {
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
    const updatedLineItems = lineItems.filter((lineItem) => lineItem.card_id !== deletedLineItem)
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

  return (
    <MyContext.Provider value={{
      user: user,
      setUser: setUser,
      cards: cards,
      setCards: setCards,
      lineItems: lineItems,
      setLineItems: setLineItems,
      reviews: reviews,
      setReviews: setReviews,
      searchTerm: searchTerm,
      setSearchTerm: setSearchTerm,
      errors: errors,
      setErrors: setErrors,
      cardsToDisplay: cardsToDisplay,
      handleLogoutClick: handleLogoutClick,
      handleAddLineItem: handleAddLineItem,
      handleLineItemDelete: handleLineItemDelete,
      handleUpdatedReview: handleUpdatedReview,
      handleDeletedReview: handleDeletedReview,
      handleNewReview: handleNewReview
      }}>
      {props.children}
    </MyContext.Provider>
  )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer, MyContext }