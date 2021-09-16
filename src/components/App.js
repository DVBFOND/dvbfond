import React from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appState: false };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
