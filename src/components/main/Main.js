import React from 'react';
import Section from '../section/Section.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainState: false };
  }

  render() {
    return (
      <main className="main">
        <Section />
      </main>
    );
  }

}

export default Main;
