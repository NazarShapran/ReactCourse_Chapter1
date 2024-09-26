import React from "react";

const AddToDoComponet = ({ title = "", onTitleChange, onSubmit }) => {
  return (
    <form>
      <input
        value={title}
        onChange={onTitleChange}
        style={{ borderRadius: "5px", height: "20px" }}
      />
      <button onClick={onSubmit} style={{ marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
};

export default AddToDoComponet;
