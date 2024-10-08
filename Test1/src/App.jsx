import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PageTitle from "./components/PageTitle";
import AdressContainer from "./components/AdressContainer";

function App() {
  return (
    <>
      <PageTitle title={"Adress book"} />
      <AdressContainer />
    </>
  );
}

export default App;
