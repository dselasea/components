import React from "react";
import Button from "./Button";

function Lists() {
  return (
    <div>
      <ul>
        <li>Scaling to many files and components.</li>
        <li>Using third-party libraries from npm.</li>
        <li>Detecting common mistakes early.</li>
        <li>Live-editing CSS and JS in development.</li>
        <li>Optimizing the output for production.</li>
      </ul>
      <Button />
    </div>
  );
}

export default Lists;
