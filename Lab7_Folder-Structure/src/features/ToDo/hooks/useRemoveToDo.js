import React from 'react'

export const useRemoveToDo = (toDos, setToDos) => {
  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };
    return {removeToDo};
}
