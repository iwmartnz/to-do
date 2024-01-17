import { useState } from "react";
import "@fontsource/moirai-one";
// Supports weights 100-900
import "@fontsource-variable/urbanist";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
