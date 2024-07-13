import React from "react";
import Card from "./caard";
import contact from "../Contacts";

function createCard(contact) {
  return (
    <card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      {contact.map(createCard)}
    </div>
  );
}

export default App;
