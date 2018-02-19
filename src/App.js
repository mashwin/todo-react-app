import React, { Component } from 'react';
import { AppHeader, TaskBar } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <TaskBar />
      </div>
    );
  }
}

export default App;
