import React from "react";

const AddAdressComponet = ({
  firstName = "",
  lastName = "",
  phone = "",
  onFirstNameChange,
  onLastNameChange,
  onPhoneChange,
  onSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={onFirstNameChange}
        placeholder="First Name"
        style={{ borderRadius: "5px", height: "20px" }}
        required
      />
      <input
        value={lastName}
        onChange={onLastNameChange}
        placeholder="Last Name"
        style={{ borderRadius: "5px", height: "20px" }}
        required
      />
      <input
        value={phone}
        onChange={onPhoneChange}
        placeholder="Phone"
        style={{ borderRadius: "5px", height: "20px" }}
        required
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
};

export default AddAdressComponet;
