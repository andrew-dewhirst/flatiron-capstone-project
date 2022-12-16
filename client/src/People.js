import React, { useContext } from "react";
import { MyContext } from './Context'

function People() {
  const cards = useContext(MyContext)
  console.log(cards)
  return ( 
      <> 
        <h1>My Name: {cards?.cards[0]?.id}</h1>
        <br />   
      </>

        
  )
}

export default People