import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import ErrorPage from './ErrorPage';
const routs = (
   < BrowserRouter >
      <div>
         <Switch>
            <Route exact path="/" component={App} />
            <Route component={ErrorPage} />
         </Switch>
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'));
serviceWorker.unregister();