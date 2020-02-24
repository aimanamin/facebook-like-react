import React, {Component} from 'react';
import FacebookLogo from '../assets/Facebook.png'

class Header extends Component{
  render() {
    return (
      <header>
        <nav>
          <img src={FacebookLogo}/>
          <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
        </nav>
      </header>
    )
  }
}
export default Header;