import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ MainPage } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
