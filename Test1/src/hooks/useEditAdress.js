import React, { useState } from 'react'

export const useEditAdress = (adresses, setAdresses) => {
  const [isEdit, setIsEdit] = useState(null);
  const [firstNameEdit, setFirstName] = useState("");
  const [lastNameEdit, setLastName] = useState("");
  const [phoneEdit, setPhone] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleEditClick = (id, firstName, lastName, phone) => {
    setIsEdit(id);
    setFirstName(firstName)
    setLastName(lastName);
    setPhone(phone)
    setShowAlert(false);
  };

  const handleSaveClick = (id) => {
    if (!firstNameEdit?.trim() || !lastNameEdit?.trim() || !phoneEdit?.trim()) {
      setShowAlert(true);
    }
    else {
      const editAdresses = adresses.map((adress) =>
        adress.id === id ? { ...adress, firstName: firstNameEdit, lastName: lastNameEdit, phone: phoneEdit } : adress
      )
      setAdresses(editAdresses);
      setShowAlert(false);
      setIsEdit(null);
    }
}
  return (
    {
      isEdit,
      showAlert,
      firstNameEdit,
      lastNameEdit,
      phoneEdit,
      setFirstName,
      setLastName,
      setPhone,
      handleEditClick,
      handleSaveClick
    }
  )
}
