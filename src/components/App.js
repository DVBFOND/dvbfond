import React from 'react';
import Header from './header/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appState: false };
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
