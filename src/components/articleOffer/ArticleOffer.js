import React from 'react';
import articleOfferImage from '../../images/articleOfferKopilkaDobra.png'

class ArticleOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articleOfferState: false };
  }

  render() {
    return (
      <article className="article">
        <img className="articleImageTitle" src={articleOfferImage} alt="Люди несут свои сердца в большую копилку"/>
        <h1 className="articleTitle">Помогите детям осуществить мечту стать здоровыми</h1>
        <p className="articleText">Помощь в сборе средств на дорогостоящее лечение</p>
        <button class="buttonWithColor" name ="buttonWantToHelp" type="button">Хочу помочь</button>
        <button class="buttonWithoutColor" name ="buttonWithoutColor" type="button">Нужна помощь</button>



      </article>
    );
  }

}

export default ArticleOffer;
