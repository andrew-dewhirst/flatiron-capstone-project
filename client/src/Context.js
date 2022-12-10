import React, {useState} from "react";

const MyContext = React.createContext()

const MyProvider = (props) => {
  const [person, setPerson] = useState({
    name: 'Andrew',
    age: 34,
    language: 'Javascript'
  })

  const toggleName = () => {
    const name = person.name === 'Andrew' ? 'Ben' : 'Andrew';
    setPerson({...person, name: name})
  }

  return (
    <MyContext.Provider value={{
      person: person,
      toggleName: toggleName
      }}>
      {props.children}
    </MyContext.Provider>
  )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }