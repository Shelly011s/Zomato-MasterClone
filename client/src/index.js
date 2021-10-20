import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

import {Provider} from "react-redux";//helps the nested components access the redux sstore
import Store from "./Redux/store";//stores the changed states

ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);
