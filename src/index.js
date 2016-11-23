import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './bootstrap.min.css';


var DATA = [
  {a:1, b:'a'},
  {a:2, b:'a'},
  {a:3, b:'a'},
  {a:4, b:'a'},
];


ReactDOM.render(
  <App data={DATA}/>,
  document.getElementById('root')
);
