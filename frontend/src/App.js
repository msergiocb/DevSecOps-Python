import React from "react";
import Orders from "./components/Orders";

function App() {
  return (
    <div>
      <header style={{ padding: 16, background: "#282c34", color: "#fff" }}>
        <h1>DevOps Demo</h1>
      </header>
      <main>
        <Orders />
      </main>
    </div>
  );
}

export default App;
