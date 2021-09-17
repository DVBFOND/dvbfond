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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerState: false };
  }
  render() {
    return (
      <header className="header">
        <img className="headerLogoLeft" src="./images/logo_dvbfond_ru.svg" alt="Логотип: dvbfond.ru"/>
        <img className="headerVertikalLine" src="./images/logo_vertikal_line.svg" alt="Вертикальная линия"/>
        <div>
          <img className="headerLogoDobro" src="./images/logo_dobro_vo_blago.svg" alt="Добро во благо"/>
          <img className="headerLogoFond" src="./images/logo_blagotvoritelni_fond.svg" alt="Благотворительный фонд"/>
        </div>
        <img className="headerMenuButton" src="./images/menu_=.svg" alt="Кнопка меню ="/>
      </header>
    );
  }
}

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

class ArticleOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articleOfferState: false };
  }
  render() {
    return (
      <article className="article">
        <img className="articleImageTitle" src="./images/articleOfferKopilkaDobra.png" alt="Люди несут свои сердца в большую копилку"/>
        <h1 className="articleTitle">Помогите детям осуществить мечту стать здоровыми</h1>
        <p className="articleText">Помощь в сборе средств на дорогостоящее лечение</p>
        <button class="buttonWithColor" name ="buttonWantToHelp" type="button">Хочу помочь</button>
        <button class="buttonWithoutColor" name ="buttonWithoutColor" type="button">Нужна помощь</button>
      </article>
    );
  }
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));
