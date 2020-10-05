import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import CreateReactApp from "./components/CreateReactApp";
import Lists from "./components/Lists";
import ComponentTypes from "./components/ComponentTypes";
import Tables from "./components/Tables";
import ReactUses from "./components/ReactUses";
import Learn from "./components/Learn";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <CreateReactApp />
      <Lists />
      <ComponentTypes />
      <Tables />
      <ReactUses />
      <Learn />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
