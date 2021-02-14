import React, { useEffect, useState } from "react";
import { get } from "./api";
import "./App.css";

function App() {
  const [velocity, setVelocity] = useState();

  useEffect(() => {
    get().then((response) => {
      console.log(response.data.velocity.name);
      setVelocity(response.data.velocity);
    });
  }, []);
  return (
    <div className="App">
      Hello this is Production Ready Deploy Application for {velocity && velocity.name} via App Buddy works
    </div>
  );
}

export default App;
