import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

const randomId = () => Math.floor(Math.random() * 100 + 1);

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addTodo = () => {
    setTodos([...todos, { id: randomId(), text: input }]);
    setInput("");
  };

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
