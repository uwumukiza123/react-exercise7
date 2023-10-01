import React from "react";

import "./App.css";

function App() {
  const [addInput, setInput] = React.useState("");
  const [addInput1, setInput1] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${addInput} ${addInput1}!`);
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleChange1(e) {
    setInput1(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={addInput}
          type="text"
          name=""
          id=""
          placeholder="first name"
          onChange={handleChange}
        />
        <input
          className="input"
          value={addInput1}
          type="text"
          name=""
          id=""
          placeholder="last name"
          onChange={handleChange1}
        />
        <button>Click Me</button>
      </form>
    </div>
  );
}

export default App;
