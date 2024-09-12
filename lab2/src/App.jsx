import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import AddToDoComponet from "./components/AddToDoComponet";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);

  function handleNewTitleChange(event) {
    setNewToDo({ id: Math.random(), title: event.target.value });
  }

  function handleSubmit() {
    setToDos([...toDos, newToDo]);
  }
  return (
    <>
      <AddToDoComponet
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={toDos} />
    </>
  );
}

export default App;
