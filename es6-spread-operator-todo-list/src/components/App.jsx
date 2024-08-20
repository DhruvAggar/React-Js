import React from "react";

function App() {
  const [inputTxt, setInputTxt] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const text = event.target.value;
    setInputTxt(text);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputTxt];
    });
    setInputTxt("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputTxt} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((Item) => (
            <li>{Item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
