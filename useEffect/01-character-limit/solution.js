import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). 
    
    Your UI should have a textarea and a button. 
    The button should be disabled if: 
    - the length of the textarea is 0 
    - or greater than 240 characters.

    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

const App = () => {
  const [userInput, setUserInput] = React.useState("");

  React.useEffect(() => {
    document.title = `${240 - userInput.length} characters left`;
  }, [userInput]);

  return (
    <div className="App">
      <textarea
        name="tweet"
        id="tweet"
        cols="30"
        rows="10"
        placeholder="What's happening?"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        disabled={userInput.length === 0 || userInput.length > 240}
        onClick={() => setUserInput("")}
      >
        Submit
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
