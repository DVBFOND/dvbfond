import React from 'react';
import headerLogoLeft from '../images/logo_dvbfond_ru.svg'
import headerVertikalLine from '../images/logo_vertikal_line.svg'
import headerLogoDobro from '../images/logo_dobro_vo_blago.svg'
import headerLogoFond from '../images/logo_blagotvoritelni_fond.svg'
import headerMenuButton from '../images/menu_=.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AppState: false };
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img className="headerLogoLeft" src={headerLogoLeft} alt="Логотип: dvbfond.ru"/>
          <img className="headerVertikalLine" src={headerVertikalLine} alt="Вертикальная линия"/>
          <div>
            <img className="headerLogoDobro" src={headerLogoDobro} alt="Добро во благо"/>
            <img className="headerLogoFond" src={headerLogoFond} alt="Благотворительный фонд"/>
          </div>
          <img className="headerMenuButton" src={headerMenuButton} alt="Кнопка меню ="/>
        </header>
      </div>
    );
  }
}

export default App;
