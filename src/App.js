import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TryCatch from './TryCatch';

const App = props => (
  <TryCatch
    render={() => {
      const data = JSON.parse(JSON.stringify([{ name: 'theo a' }]));
      return <div>{JSON.stringify(data)}</div>;
    }}
    onCatch={err => {
      console.error('ERR', err);
      return <div>failure {err.message} </div>;
    }}
  />
);

export default App;
