import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigations";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='shell-content'>
                <div className='app-wrapper'>

                    <Header/>

                    <Navigation/>

                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/profile' component={Content}/>
                    </div>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
