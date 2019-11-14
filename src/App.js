import React from "react";
import "./App.css";

//components
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
