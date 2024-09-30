import React from "react";
import RemoveToDoComponent from "./RemoveToDoComponent";
import EditToDoComponent from "./EditToDoComponent";
import { useState } from "react";

const ToDoTable = ({ toDos, onRemove, onEdit }) => {
  const [editId, setEditId] = useState(null);

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
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td>
                <EditToDoComponent
                  newTitle={toDo.title}
                  onSave={(newTitle) => onEdit(toDo.id, newTitle)}
                />
              </td>
              <td>
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
