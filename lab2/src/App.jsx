import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import AddToDoComponet from "./components/AddToDoComponet";
import SearchInputComponent from "./components/SearchInputComponent";
import { useRemoveToDo } from "./hooks/useRemoveToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);
  const { removeToDo } = useRemoveToDo(toDos, setToDos);
  const [search, setSearch] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo({ title: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const toDoWithId = { ...newToDo, id: Date.now() };
    setToDos([...toDos, toDoWithId]);
    setNewToDo(null);
  }

  function handleSearchChange(search) {
    setSearch(search);
  }
  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  const filteredToDos = toDos.filter((toDo) => toDo.title?.includes(search));
  return (
    <>
      <div
        style={{
          width: "auto",
          backgroundColor: "gray",
          borderRadius: "5px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <SearchInputComponent
          search={search}
          onSearchChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <AddToDoComponet
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <div
        style={{
          backgroundColor: "gray",
          borderRadius: "5px",
          padding: "3px",
          marginTop: "10px",
        }}
      >
        <ToDoTable toDos={filteredToDos} onRemove={removeToDo} />
      </div>
    </>
  );
}

export default App;
