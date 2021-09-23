class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appState: false };
    this.popupIsopen = "overlayIsOpened";
  }

  render() {
    return (
      <div className="App">
        <Header onMenuButton={false} onCloseButton={false} />
        <Main />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMenuButton: this.props.onMenuButton,
      onCloseButton: this.props.onCloseButton,
    };
  }

  handleOnMenuButton = () => {
    this.setState({
      onMenuButton: !this.state.onMenuButton,
    });
  };

  handleOnCloseButton = () => {
    this.setState({
      onMenuButton: this.props.onMenuButton,
      onCloseButton: this.props.onCloseButton,
    });
  };

  render() {
    return (
      <header className="header">
        <img className="headerLogoLeft" src="./images/logo_dvbfond_ru.svg" alt="Логотип: dvbfond.ru"/>
        <img className="headerVertikalLine" src="./images/logo_vertikal_line.svg" alt="Вертикальная линия"/>
        <div>
          <img className="headerLogoDobro" src="./images/logo_dobro_vo_blago.svg" alt="Добро во благо"/>
          <img className="headerLogoFond" src="./images/logo_blagotvoritelni_fond.svg" alt="Благотворительный фонд"/>
        </div>
        <img onClick={this.handleOnMenuButton} className="headerMenuButton" src="./images/menu_=.svg" alt="Кнопка меню ="/>
        <div className={`overlay overlayMenuMobile ${this.state.onMenuButton ? 'overlayIsOpened' : ''}`}>
            <div className="popup">
              <button onClick={this.handleOnCloseButton} className="popupButtonClose" name ="popupButtonClose" type="button"></button>
              <nav className="popupNavigation">
                <ul className="popupListConteiner">
                  <li className="popupListItem"><a className="popupListLink" href = "#">О фонде</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Как помочь</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Нуждаются в помощи</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Кому помогли</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Команда</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Как отправить перевод</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Документы фонда</a></li>
                  <li className="popupListItem"><a className="popupListLink" href = "#">Отчеты</a></li>
                </ul>
              </nav>
              <ul className="popupContactList">
                <li className="popupListItem"><p className="popupListText">+7(926)444-22-30</p></li>
                <li className="popupListItem"><p className="popupListText">Приём звонков: с 9:00 до 18:00 (пн-пт)</p></li>
                <li className="popupListItem"><p className="popupListText">help@dvbfond.ru</p></li>
              </ul>
            </div>
        </div>
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
        <img className="articleImageTitle" src="./images/articleOfferKopilkaDobra.svg" alt="Люди несут свои сердца в большую копилку"/>
        <h1 className="articleTitle">Помогите детям осуществить мечту стать здоровыми</h1>
        <p className="articleText">Помощь в сборе средств на дорогостоящее лечение</p>
        <button className="buttonWithColor" name ="buttonWantToHelp" type="button">Хочу помочь</button>
        <button className="buttonWithoutColor" name ="buttonWithoutColor" type="button">Нужна помощь</button>
      </article>
    );
  }
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));
