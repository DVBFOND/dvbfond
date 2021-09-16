import React from 'react';
import ArticleOffer from '../articleOffer/ArticleOffer.js';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionState: false };
  }

  render() {
    return (
      <section className="section">
        <ArticleOffer />

      </section>
    );
  }

}

export default Section;
