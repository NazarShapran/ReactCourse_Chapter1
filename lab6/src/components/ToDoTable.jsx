import React from "react";
import RemoveToDoComponent from "./RemoveToDoComponent";
import Alert from "@mui/material/Alert";
import { useEditToDo } from "../hooks/useEditToDo";

const ToDoTable = ({ toDos, onRemove, setToDos, filteredToDos }) => {
  const {
    isEdit,
    titleEdit,
    showAlert,
    setTitle,
    handleEditClick,
    handleSaveClick,
  } = useEditToDo(toDos, setToDos);

  const showToDos = filteredToDos.length > 0 ? filteredToDos : toDos;

  if (toDos.length === 0) {
    return <div>no data to display</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {showToDos.map((toDo) => {
          return (
            <tr key={toDo.id}>
              <td>{toDo.id.toString()}</td>
              <td>
                {isEdit === toDo.id ? (
                  <>
                    <input
                      value={titleEdit}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {showAlert && (
                      <Alert severity="warning">Title cannot be empty!</Alert>
                    )}
                  </>
                ) : (
                  toDo.title
                )}
              </td>
              <td>
                {isEdit === toDo.id ? (
                  <button onClick={() => handleSaveClick(toDo.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(toDo.id, toDo.title)}>
                    Edit
                  </button>
                )}
                <RemoveToDoComponent onSubmit={() => onRemove(toDo.id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoTable;
