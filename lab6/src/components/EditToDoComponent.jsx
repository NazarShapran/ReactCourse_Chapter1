import React, { useState } from "react";
import Alert from "@mui/material/Alert";

const EditToDoComponent = ({ onSave, newTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(newTitle);
  const [showAlert, setShowAlert] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
    setShowAlert(false);
  };
  const handleSaveClick = () => {
    if (!title.trim()) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setIsEdit(false);
      onSave(title);
    }
  };
  return (
    <>
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          {showAlert && (
            <Alert severity="warning">Title cannot be empty!</Alert>
          )}
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </>
  );
};

export default EditToDoComponent;
