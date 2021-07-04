import React, { useState } from 'react';
import '../assets/scss/style.scss';

import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";

import iconArrow from "../assets/images/icon-arrow.svg";

import desktopOne from "../assets/images/desktop-image-hero-1.jpg";
import desktopTwo from "../assets/images/desktop-image-hero-2.jpg";
import desktopThree from "../assets/images/desktop-image-hero-3.jpg";
import mobileOne from "../assets/images/mobile-image-hero-2.jpg";
import mobileTwo from "../assets/images/mobile-image-hero-3.jpg";
import mobileThree from "../assets/images/mobile-image-hero-1.jpg";

const Hero = () => {

  const slides = [
    {
      dImage: desktopOne,
      mImage: mobileOne,
      title: 'Discover innovative ways to decorate',
      description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
      dImage: desktopTwo,
      mImage: mobileTwo,
      title: 'We are available all across the globe',
      description: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
    },
    {
      dImage: desktopThree,
      mImage: mobileThree,
      title: 'Manufactured with the best materials',
      description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
  ];

  const [slide, setSlide] = useState(0);

  const toggleSlidePrev = () => setSlide(prevSlide => prevSlide === 0 ? (slides.length - 1)  : (prevSlide - 1));

  const toggleSlideNext = () => setSlide(prevSlide => prevSlide === (slides.length - 1) ? 0 : (prevSlide + 1));

  return (
    <section className="hero">
      <div className="container flex-jc-sb">
        <div className="hero__image">
          <img src={slides[slide].dImage} className="hide-for-mobile" alt="slide" />
          <img src={slides[slide].mImage} className="hide-for-desktop" alt="slide" />
          <div className="hero__controls hide-for-desktop controls_right flex">
            <div onClick={()=>toggleSlidePrev()}>
              <img src={angleLeft} alt="angle left" />
            </div>
            <div onClick={()=>toggleSlideNext()}>
              <img src={angleRight} alt="angle right" />
            </div>
          </div>
        </div>
        <div className="hero__description">
          <div className="hero__text">
            <h1>{slides[slide].title}</h1>
            <p>{slides[slide].description}</p>
          </div>
          <a href="#">
            SHOP NOW
            <img src={iconArrow} alt="icon arrow" />
          </a>
          <div className="hero__controls hide-for-mobile controls_left flex">
            <div onClick={()=>toggleSlidePrev()}>
              <img src={angleLeft} alt="angle left" />
            </div>
            <div onClick={()=>toggleSlideNext()}>
              <img src={angleRight} alt="angle right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;