import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ContactForm from '../components/ContactForm';
import SectionStart from '../components/elements/SectionStart';
import data from '../scripts/portfolioItems';
import PortfolioItemModal from '../components/elements/PortfolioItemModal';
import '../styles/body.css';

const PortfolioPage = () => {
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

  const keys = [];
  
  const buildCards = Object.keys(data).map((key) => {
    const item = data[key];
    
    keys.push(key)

    let classNameHeader = 'card-header '
    if (key === '1') classNameHeader = 'card-header one';
    if (key === '2') classNameHeader = 'card-header two';
    if (key === '3') classNameHeader = 'card-header three';


    return (
      <article className="card-wrap" key={`${item}${Math.floor(Math.random() * 10) + 1}`}>
        <div className={classNameHeader}>
          <i className="fas fa-code"></i>
        </div>
        <div className="card-content">
          <h1 className="card-title">{item.title}</h1>
          <p className="card-text">{item.shortDescription}</p>
          < PortfolioItemModal
            title={item.title}
            shortDescription={item.shortDescription}
            longDescription={item.longDescription}
            frontEnd={item.frontEnd}
            backEnd={item.backEnd}
            leveragedSoftware={item.leveragedSoftware}
            github={item.github}
          />
        </div>
      </article>
    );
  });


  return (
    <div>
      <NavBar />
      <SideBar />
      <Header />
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          top: top,
          zIndex: 100,
          backgroundColor: 'rgb(255, 255, 255)',
          overflow: 'auto',
          height: '100vh',
          minHeight: '100% !important',
          padding: '0 20px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.3)'
        }}
      >
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '20px'
          }}
        >

          <div className="carousel-heading">
            <h2>my <span>Projects</span></h2>
          </div>
          <SectionStart />
          <div style={{ marginTop: '5em' }}></div>

          <div className="card-container">
            {buildCards}
          </div>

        </section>
        <div className='skills-box'>
          <ContactForm variant="outlined" />
        </div>


      </div>
    </div>
  )
}

export default PortfolioPage