import '../assets/scss/style.scss';

import imageAboutDark from '../assets/images/image-about-dark.jpg';
import imageAboutLight from '../assets/images/image-about-light.jpg';

export default function Feature() {
  return (
    <section className="feature">
      <div className="feature__content container flex-ai-c">
        <div className="feature__image">
          <img src={imageAboutDark} alt="about dark" />
        </div>

        <div className="feature__text">
          <h3>ABOUT OUR FURNITURE </h3>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <div className="feature__image">
          <img src={imageAboutLight} alt="about light" />
        </div>
      </div>
    </section>
  );
}