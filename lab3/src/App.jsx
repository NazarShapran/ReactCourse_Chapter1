import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PageTitle from "./components/PageTitle";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <>
      <PageTitle title={"To Do App"} />
      <ToDoContainer />
    </>
  );
}

export default App;
