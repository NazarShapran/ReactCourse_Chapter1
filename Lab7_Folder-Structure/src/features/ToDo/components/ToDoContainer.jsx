import React, { useState } from "react";
import ToDoTable from "./ToDoTable";
import AddToDoComponet from "./AddToDoComponet";
import SearchInputComponent from "../../../common/components/SearchInputComponent";
import LoaderComponent from "../../../common/components/LoaderComponent";
import { useRemoveToDo } from "../hooks/useRemoveToDo";
import { useGetAllToDo } from "../../../common/hooks/useGetAllToDo";

const ToDoContainer = () => {
  const [newToDo, setNewToDo] = useState(null);
  const [search, setSearch] = useState("");

  const { loading, error, toDos, setToDos } = useGetAllToDo();
  const { removeToDo } = useRemoveToDo(toDos, setToDos);

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

  if (error) {
    return <p>Error: {error.message}</p>;
  }
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
      <LoaderComponent loading={loading}>
        <div
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            padding: "3px",
            marginTop: "10px",
          }}
        >
          <>
            <ToDoTable
              toDos={toDos}
              onRemove={removeToDo}
              setToDos={setToDos}
              filteredToDos={filteredToDos}
            />
          </>
        </div>
      </LoaderComponent>
    </>
  );
};

export default ToDoContainer;
