import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Programs() {
  const [count, setCount] = useState(0);

  return (
    <div className="Programs">
      <header className="Programs-header">
        <h1 className="text-3xl font-bold underline">Programs Page</h1>
        <a href="/">Home</a>
      </header>
    </div>
  );
}

export default Programs;
