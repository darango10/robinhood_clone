import './App.css';
import React from "react";
import Header from "./components/Header";
import Newsfeed from "./components/Newsfeed";
import Stats from "./components/Stats";

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__body">
                <div className="app__container">
                    <Newsfeed/>
                    <Stats/>
                </div>
            </div>
        </div>
    );
}

export default App;
