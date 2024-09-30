import React from 'react'

export const useEditToDo = (toDos, setToDos) => {
    const editToDo = (id, newTitle) => {
        setToDos(
            toDos.map((toDo) =>
              toDo.id === id ? { ...toDo, title: newTitle } : toDo
            )
        );
    };
  return (
    {editToDo}
  )
}
