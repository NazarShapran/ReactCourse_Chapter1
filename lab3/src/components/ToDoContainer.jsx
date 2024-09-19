import React from "react";
import { useState } from "react";
import ToDoTable from "./ToDoTable";
import AddToDoComponet from "./AddToDoComponet";
import SearchInputComponent from "./SearchInputComponent";
import { useRemoveToDo } from "../hooks/useRemoveToDo";

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);
  const { removeToDo } = useRemoveToDo(toDos, setToDos);
  const [search, setSearch] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo({ title: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!newToDo || !newToDo.title.trim()) {
      return;
    }
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
};

export default ToDoContainer;
