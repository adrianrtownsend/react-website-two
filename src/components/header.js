import { useState } from  'react'

import '../assets/scss/style.scss';

import logo from '../assets/images/logo.svg';


export default function Header() {

  const [headerOpen, setHeaderOpen] = useState(true)

  const toggleHeader = () => {
    setHeaderOpen(prevState => {
      const body = document.querySelector('body');
      prevState ? body.classList.remove('noScroll') : body.classList.add('noScroll')
      return !prevState
    })
  }

  return (
    <header className={`header ${headerOpen ? '' : 'open'}`}>
      <div className={`overlay ${headerOpen ? 'fade-out' : 'fade-in'}`}/>
      <div className={`overlay_block ${headerOpen ? 'fade-out' : 'fade-in'}`} />
      <nav>
        <span id="btnHamburger" onClick={() => toggleHeader()} href="/" className="header__toggle hide-for-desktop">
          <span/>
          <span/>
          <span/>
        </span>

        <a href="/" className={`header__logo ${headerOpen ? 'fade-in' : 'fade-out'}`}>
          <img src={logo} alt="logo" />
        </a>

        <div className="hide-for-desktop" />
       

        <div className={`header__menu header__menu__mobile hide-for-desktop ${headerOpen ? 'fade-out' : 'fade-in'}`}>
          <a href="/">home</a>
          <a href="/">shop</a>
          <a href="/">about</a>
          <a href="/">contact</a>
        </div>



        <div className="header__links hide-for-mobile">
          <a href="/">home</a>
          <a href="/">shop</a>
          <a href="/">about</a>
          <a href="/">contact</a>
        </div>
      </nav>
    </header>
  );
}