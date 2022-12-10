import React from "react";
import { MyConsumer } from './Context';

function People() {
  return (
    <MyConsumer>
      {context => 
        <h1>{context.person.name}</h1>
        }
    </MyConsumer>
  )
}

export default People