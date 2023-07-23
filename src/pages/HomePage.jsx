import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import SectionStart from '../components/elements/SectionStart';
import homeProfilePicture from '../images/Home2.png';
import servicesObject from '../scripts/servicesObject';
import SkillsBox from '../components/SkillsBox';
import '../styles/home.css';
import web from '../images/web.jpeg'
import crm from '../images/crm.jpeg'
import combo from '../images/combo.jpeg'


const HomePage = () => {

  const [top, setTop] = useState('auto');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 800px)');
    const handleMediaQueryChange = () => {
      setTop(mediaQuery.matches ? '200px' : '56px');
    };

    handleMediaQueryChange();
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  //****** Color Circle */
  const colors = [
    { r: 128, g: 255, b: 219 }, //Sea green
    { r: 40, g: 191, b: 201 }, //light blue
    { r: 68, g: 184, b: 184 }, //darker blue
    { r: 255, g: 213, b: 0 }, //light purple
    { r: 29, g: 222, b: 206 } //purple
  ];

  const displayServices = Object.keys(servicesObject).map((key) => {
    const item = servicesObject[key];
    let icon = "";

    if (item.icon === "web") {
      icon = web;
    } else if (item.icon === "combo") {
      icon = combo;
    } else {
      icon = crm;
    }

    return (
      <article
        className='services-article home-card'
        key={item.key}
      >
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div>
          <h1 className="card-title">
            {item.serviceName}
          </h1>
          <p className="card-text">
            {item.description}
          </p>
        </div>
      </article>
    );
  });



  return (
    <div>
      <NavBar color="#44B8B8" />
      <Header colors={colors} />
      <div className='page-body'
        style={{ top: top }}
      >
        <div className="carousel-heading home">
          <h2>Lauren <span>Johnston</span></h2>
        </div>

        <SectionStart color="#44B8B8" />
        <div style={{ marginTop: '3em', marginBottom: '1em' }} />

        <div className='home-bio'>

          <div className='home-bio-services'>
            {displayServices}
          </div>

          <div className='home-bio-picture'>
            <img
              src={homeProfilePicture}
              alt="Profile"
            />
          </div>

          <div className='home-bio-paragraph'>
            <div className='home-bio-paragraph-content home-card'>

              <h1 className="card-title">Software Developer</h1>

              <p>Hi, I'm Lauren, a software developer in Alberta, Canada. I coached over 100 clients before transitioning into full-time development in 2021. I'm fascinated by the solutions our team creates. When not coding, I enjoy running, rock climbing, and being a cat lover. My rescued companion Yennefer is a helpful coding assistant, often walking on my keyboard!</p>
            </div>

          </div>
        </div>

        <SkillsBox />
        <ContactForm variant='filled' />
      </div>
    </div >
  )
}

export default HomePage