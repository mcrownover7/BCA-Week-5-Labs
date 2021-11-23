import React from "react";
import List from "./components/List";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [id, setId] = useState(null);

  return (
    <div>
      <List chooseId={setId} />
      <Display postId={id} />
    </div>
  );
}

export default App;
