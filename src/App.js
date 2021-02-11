import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigations";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className='shell-content'>
            <div className='app-wrapper'>

                <Header/>

                <Navigation/>

                <div className='app-wrapper-content'>
                    {/*<Dialogs/>*/}
                    <Content />
                </div>



            </div>
        </div>
    );
}


export default App;
