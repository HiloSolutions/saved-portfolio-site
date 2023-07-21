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
import '../styles/portfolio.css';


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

  const colors = [
    { r: 97, g: 68, b: 184 }, //light purple
    { r: 97, g: 68, b: 184 }, //light purple
    { r: 241, g: 198, b: 255}, //pink
    { r: 29, g: 222, b: 206 } //blue
  ];


  const buildCards = Object.keys(data).map((key) => {
    const item = data[key];


    return (
      <article className="portfolio-card" key={key}>
        <div className={`card-header ${item.classNameHeader}`}>
         
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
            cta={item.cta}
          />
        </div>
      </article>
    );
  });


  return (
    <div className='portfolio'>
      <NavBar color="#6144B8"/>
      <SideBar />
      <Header colors={colors}/>
      <div
        className='page-body'
        style={{ top: top }}
      >

        <div>
          <div className="carousel-heading">
            <h2>My <span>Projects</span></h2>
          </div>
          <SectionStart color="#6144B8"/>
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