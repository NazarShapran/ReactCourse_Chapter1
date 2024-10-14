import "./App.css";

import PageTitle from "./common/components/PageTitle";
import ToDoContainer from "./features/ToDo/components/ToDoContainer";

function App() {
  return (
    <>
      <PageTitle title={"To Do App"} />
      <ToDoContainer />
    </>
  );
}

export default App;
