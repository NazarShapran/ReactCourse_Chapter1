import React, { useState } from "react";
import AdressTable from "./AdressTable";
import AddAdressComponet from "./AddAdressComponet";
import SearchInputComponent from "./SearchInputComponent";

const AdressContainer = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [search, setSearch] = useState("");

  const handleNewFirstNameChange = (event) => {
    setNewAddress((prev) => ({ ...prev, firstName: event.target.value }));
  };

  const handleNewLastNameChange = (event) => {
    setNewAddress((prev) => ({ ...prev, lastName: event.target.value }));
  };

  const handleNewPhoneChange = (event) => {
    setNewAddress((prev) => ({ ...prev, phone: event.target.value }));
  };

  const handleSubmit = () => {
    if (
      !newAddress.firstName.trim() ||
      !newAddress.lastName.trim() ||
      !newAddress.phone.trim()
    ) {
      return;
    }
    const addressWithId = { ...newAddress, id: Date.now() };
    setAddresses((prev) => [...prev, addressWithId]);
    setNewAddress({ firstName: "", lastName: "", phone: "" });
  };

  const handleSearchChange = (search) => {
    setSearch(search);
  };

  const filteredAddresses = addresses.filter(
    (address) =>
      address.firstName.toLowerCase().includes(search.toLowerCase()) ||
      address.lastName.toLowerCase().includes(search.toLowerCase()) ||
      address.phone.includes(search)
  );

  return (
    <>
      <div
        style={{
          width: "auto",
          backgroundColor: "gray",
          borderRadius: "5px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <SearchInputComponent
          search={search}
          onSearchChange={handleSearchChange}
        />
      </div>
      <AddAdressComponet
        firstName={newAddress.firstName}
        lastName={newAddress.lastName}
        phone={newAddress.phone}
        onFirstNameChange={handleNewFirstNameChange}
        onLastNameChange={handleNewLastNameChange}
        onPhoneChange={handleNewPhoneChange}
        onSubmit={handleSubmit}
      />

      <div
        style={{
          backgroundColor: "gray",
          borderRadius: "5px",
          padding: "3px",
          marginTop: "10px",
        }}
      >
        <AdressTable
          addresses={addresses}
          setAddresses={setAddresses}
          filteredAddresses={filteredAddresses}
        />
      </div>
    </>
  );
};

export default AdressContainer;
