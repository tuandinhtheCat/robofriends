import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Card from './Card';
//import CardList from './CardList'; // A parent of Card
import * as serviceWorker from './serviceWorker';
//import { robots } from './robots'; //If we have another variable, the import should look like this import {robots, cats, dogs} from './robots'.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
