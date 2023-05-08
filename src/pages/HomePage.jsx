import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ContactForm from '../components/ContactForm';
import SectionStart from '../components/elements/SectionStart';
import homeProfilePicture from '../images/homeProfilePicture.jpg';
import servicesObject from '../scripts/servicesObject';
import SkillsBox from '../components/SkillsBox';
import '../styles/home.css';



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



  const displayServices = Object.keys(servicesObject).map((key) => {
    const item = servicesObject[key];

    return (
      <article
        className='services-article'
        key={item.key}
      >
        <h1
          className="card-title"
          style={{ margin: '0.5em, 0, 0, 0' }}
        >
          {item.serviceName}
        </h1>
        <p
          className="card-text"
          style={{
            fontSize: '12.5px',
            margin: '0, 0, 0, 0.5em'
          }}
        >
          {item.description}
        </p>
      </article>
    );
  });



  return (
    <div>
      <NavBar />
      <SideBar />
      <Header />
      <div className='page-body'
        style={{ top: top }}
      >
        <div className="carousel-heading">
          <h2>Lauren <span>Johnston</span></h2>
        </div>

        <SectionStart />
        <div style={{ marginTop: '4em', marginBottom: '1em' }} />

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
            <div className='home-bio-paragraph-content'>

              <h1 className="card-title">Web Development Specialist</h1>

              <p>Hi, I'm Lauren. I am a software developer based in Alberta, Canada. I previously worked as a project manager and coach to over 100 clients.</p>

              <p>Since 2018, I have worked in various software projects. As time progressed I became fascinated by the solutions produced by our development team. Finally, In 2021, I knew that I wanted to transition into a career as a full-time software developer.</p>

              <p>When I'm not coding, I enjoy staying active through running and rock climbing. I am also a cat lover. I have a furry companion named Yennefer who I rescued from the street. Yennefer is quite the coding assistant too - she has a habit of walking all over my keyboard when I'm working!</p>
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