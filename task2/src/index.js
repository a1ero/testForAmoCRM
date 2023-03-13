import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./components/App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </React.StrictMode>
    </BrowserRouter>

);


reportWebVitals();
