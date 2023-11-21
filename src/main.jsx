import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./i18n"

import {BrowserRouter} from 'react-router-dom';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
)
