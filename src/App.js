import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigations";
import Content from "./Components/Content/Content";

function App() {
  return (
      <div className= 'shell-content'>
            <div className= 'app-wrapper'>

                <Header />

                <Navigation />

                <Content />
            </div>
      </div>
  );
}


export default App;
