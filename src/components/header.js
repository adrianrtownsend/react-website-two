import '../assets/scss/style.scss';

import logo from '../assets/images/logo.svg';

const body = document.querySelector('body');
const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const altFadeElems = document.querySelectorAll('.alt-has-fade');

// function btnHamburgerClick(e) {
  e.preventDefault();
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    altFadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    altFadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });

  } 
}//

export default function Header() {
  return (
    <header className="header">
      <div className="overlay has-fade"/>
      <div className="overlay_block has-fade" />
      <nav>
        {/*<a id="btnHamburger" onClick={btnHamburgerClick} href="/" className="header__toggle hide-for-desktop">
          <span/>
          <span/>
          <span/>
        </a>*/}

        <a href="/" className="header__logo alt-has-fade">
          <img src={logo} alt="logo" />
        </a>

        <div className="hide-for-desktop" />
       

        <div className="header__menu has-fade hide-for-desktop">
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