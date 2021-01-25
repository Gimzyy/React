import React from "react";
import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigations";
import Content from "./Components/Content";

function App() {
  return (
    <div className= 'app-wrapper'>
        <Header />

        <Navigation />

        <Content />
    </div>
  );
}


export default App;
