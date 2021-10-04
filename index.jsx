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
        <HowToHelp />
        <GetHelp />
        <Steps />
        <Authors />
        <CanYouHelp />
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
class HowToHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { howToHelpState: false };
  }
  render() {
    return (
      <section className="howToHelp">
        <h2 className="blockTitle">Как помочь</h2>
        <SliderHowToHelp />
      </section>
    );
  }
}

class SliderHowToHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderState: false
    };
  }

  render() {
    return (
      <div className="slider">
        <div className="sliderCards">
          <div className="sliderCard">
            <img className="sliderCardIcon" src="./images/hard.svg" />
            <h3 className="sliderCardTitle">Сделайте пожертвование</h3>
            <p className="sliderCardText">
              Любая сумма поможет оплатить дорогостоящее лечение тяжело больным детям.
            </p>
          </div>
        </div>
        <div className="sliderButtons">
          <button className="sliderButton sliderButtonLeft"></button>
          <button className="sliderButton sliderButtonRight"></button>
        </div>
      </div>
      );
    }
}

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StepsState: false
    };
  }

  render() {
    return (
      <section className="steps">
        <h2 className="blockTitle">Как мы работаем:</h2>
        <SliderSteps />
      </section>
    );
  }
}

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AuthorsState: false
    };
  }

  render() {
    return (
      <section className="authors">
        <h2 className="blockTitle">Наша команда:</h2>
        <p className="blockDescription">Наша цель - помочь больным детям</p>
        <SliderAuthors />
      </section>
    );
  }
}

class GetHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GetHelpState: false
    };
  }

  render() {
    return (
      <section className="getHelp">
        <h2 className="blockTitle">Получить помощь</h2>
        <p className="getHelpParagraph">
          Напишите нам на почту
        </p>
        <a href="mailto:help@dvbfond.ru" className="getHelpEmail">help@dvbfond.ru</a>

        <div className="getHelpStep">
          <img className="getHelpIllustration" src="./images/mail.svg" alt="Не удалось загрузить изображение" />
          <h3 className="getHelpStepTitle">Опишите коротко ситуацию</h3>
          <p className="getHelpParagraph">
          1. ФИО Мамы или Папы и Ребенка
          </p>

          <p className="getHelpParagraph">
            2. Ваш телефон
          </p>

          <p className="getHelpParagraph">
            3. Ссылки на соц. сети (если есть) где ранее велись сборы или есть вся информация о ребенке (фото, видео, тексты с описаниями)
          </p>
        </div>

        <div className="getHelpStep">
          <img className="getHelpIllustration" src="./images/docs.svg" alt="Не удалось загрузить изображение" />
          <h3 className="getHelpStepTitle">
            Приложить к письму цветные сканы документов
          </h3>
          <p className="getHelpParagraph">
            1. Скан паспорта одного из родителей в формате PDF
          </p>

          <p className="getHelpParagraph">
            2. Свидетельство о рождении ребенка
          </p>

          <p className="getHelpParagraph">
            3. Заключение лечащего врача
          </p>

          <p className="getHelpParagraph">
            4. Справка об инвалидности
          </p>

          <p className="getHelpParagraph">
            5. Счет из клиники где предпологается лечение ребенка
          </p>

          <p className="getHelpParagraph">
            6. История болезни с точным названием диагноза
          </p>

          <p className="getHelpNote">
          * Все эти документы необходимы для предъявления в соцсетях, чтобы не блокировали пост о сборе.
          </p>
        </div>

      </section>
    );
  }
}

class CanYouHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CanYouHelpState: false
    };
  }

  render() {
    return (
      <section className="youCanHelp">
        <h2 className="blockTitle">Вы можете помочь</h2>
        <div className="youCanHelpContainer">
          <img className="youCanHelpIcon" src="./images/hard.svg" alt="Не удалось загрузить изображение" />
          <h3 className="youCanHelpContainerTitle">Сделайте пожертвование</h3>
          <p className="youCanHelpText">
            Объединившись вместе, мы сможем подарить надежду детям с тяжелыми заболеваниями и каждый Ваш рубль дает шанс на выздоровление.
          </p>
          <button className="youCanHelpButton youCanHelpButtonTypeHelp">
            Пожертвовать
          </button>
        </div>

        <div className="youCanHelpContainer">
          <img className="youCanHelpIcon" src="./images/1.svg" alt="Не удалось загрузить изображение" />
          <h3 className="youCanHelpContainerTitle">Станьте волонтёром</h3>
          <p className="youCanHelpText">
            Помогать можно не только деньгами, любая помощь всегда нужна. Станьте волонтером фонда и будем погать вместе.
          </p>
          <button className="youCanHelpButton youCanHelpButtonTypeVolunteer">
            Стать волонтёром
          </button>
        </div>
      </section>
    );
  }
}
class SliderSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderState: false
    };
  }

  render() {
    return (
      <div className="slider">
        <div className="sliderCards">
          <div className="sliderCard">
            <img className="sliderCardIcon" src="./images/first_step.svg" />
            <p className="sliderCardText">
              Принимаем от вас обращение на помощь. Проводим сбор и проверку необходимых документов.
            </p>
          </div>
        </div>
        <div className="sliderButtons">
          <button className="sliderButton sliderButtonLeft"></button>
          <button className="sliderButton sliderButtonRight"></button>
        </div>
      </div>
      );
    }
}

class SliderAuthors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SliderAuthorsState: false
    }
  }

  render() {
    return (
      <div className="slider">
      <div className="sliderCards">
        <div className="sliderAuthor">
          <img src="./images/alex.jpg" className="sliderAuthorImage" />
          <h3 className="sliderAuthorName">Мясоед Александр</h3>
          <p className="sliderAuthorDescription">
            IT-волонтёр <br /> Веб-разработчик
          </p>
        </div>
      </div>
      <div className="sliderButtons">
        <button className="sliderButton sliderButtonLeft"></button>
        <button className="sliderButton sliderButtonRight"></button>
      </div>
    </div>
    );
  }
}
//class
ReactDOM.render((
  <App />
), document.querySelector('#root'));
