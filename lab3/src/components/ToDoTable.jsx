import React from "react";
import RemoveToDoComponent from "./RemoveToDoComponent";

const ToDoTable = ({ toDos, onRemove }) => {
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
