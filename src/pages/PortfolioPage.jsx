import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import SkillsBox from '../components/SkillsBox';
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
        className='page-body'
        style={{ top: top }}
      >

        <div>
          <div className="carousel-heading">
            <h2>my <span>Projects</span></h2>
          </div>
          <SectionStart />
          <div style={{ marginTop: '5em' }}></div>

          <div className="card-container">
            {buildCards}
          </div>
        </div>

        <SkillsBox />
        <ContactForm variant='filled' />

      </div>
    </div>
  )
};

export default PortfolioPage;