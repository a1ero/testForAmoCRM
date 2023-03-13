import React from "react";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

import '../styles/app.css'
import '../@media/@app.css'

function App() {
    return (
            <div className="App">
                <div className='App__background'>
                    <Header/>
                    <Home/>
                    <Footer/>
                </div>
            </div>

    );
}

export default App;
