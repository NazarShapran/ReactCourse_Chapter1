import React, { useState } from 'react'

export const useEditToDo = (toDos, setToDos) => {
  const [isEdit, setIsEdit] = useState(null);
  const [titleEdit, setTitle] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const handleEditClick = (id, title) => {
    setIsEdit(id);
    setTitle(title)
    setShowAlert(false);
  };

  const handleSaveClick = (id) => {
    if (!titleEdit.trim()) {
      setShowAlert(true);
    }
    else {
      const editToDos = toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, title: titleEdit } : toDo
      )
      setToDos(editToDos);
      setShowAlert(false);
      setIsEdit(null);
    }
}
  return (
    {
      isEdit,
      showAlert,
      titleEdit,
      setTitle,
      handleEditClick,
      handleSaveClick
    }
  )
}
