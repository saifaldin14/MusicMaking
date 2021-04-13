import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  );
};

export default App;
