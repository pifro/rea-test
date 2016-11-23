import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './dropzone.css';
import Search from './Search.js';
import DropZone from 'react-dropzone-component';

const App = (props) =>
<div className="App">
  <Header />
  <Search />
  <AddFile />
</div>

const Header = (props) =>
<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Rea v0.1</h2>
</div>

const AddFile = (props) =>
<div className="Add-file">
  <DropZone postUrl="/addfile"/>
</div>

export default App;
