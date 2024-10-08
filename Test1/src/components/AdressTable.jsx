import React from "react";
import Alert from "@mui/material/Alert";
import { useEditAdress } from "../hooks/useEditAdress";

const AdressTable = ({ addresses, setAddresses, filteredAddresses }) => {
  const {
    isEdit,
    firstNameEdit,
    lastNameEdit,
    phoneEdit,
    showAlert,
    setFirstName,
    setLastName,
    setPhone,
    handleEditClick,
    handleSaveClick,
  } = useEditAdress(addresses, setAddresses);

  const showAddresses =
    filteredAddresses.length > 0 ? filteredAddresses : addresses;

  if (addresses.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {showAddresses.map((address) => {
          return (
            <tr key={address.id}>
              <td>{address.id.toString()}</td>
              <td>
                {isEdit === address.id ? (
                  <>
                    <input
                      value={firstNameEdit}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </>
                ) : (
                  address.firstName
                )}
              </td>
              <td>
                {isEdit === address.id ? (
                  <>
                    <input
                      value={lastNameEdit}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </>
                ) : (
                  address.lastName
                )}
              </td>
              <td>
                {isEdit === address.id ? (
                  <>
                    <input
                      value={phoneEdit}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </>
                ) : (
                  address.phone
                )}
              </td>

              <td>
                {isEdit === address.id ? (
                  <>
                    <button onClick={() => handleSaveClick(address.id)}>
                      Save
                    </button>
                    {showAlert && (
                      <Alert severity="warning" style={{ marginTop: "10px" }}>
                        All fields must be filled!
                      </Alert>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() =>
                      handleEditClick(
                        address.id,
                        address.firstName,
                        address.lastName,
                        address.phone
                      )
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdressTable;
