import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SkillsBox from '../components/SkillsBox';
import ContactForm from '../components/ContactForm';
import SectionStart from '../components/elements/SectionStart';
import data from '../scripts/portfolioItems';
import PolaroidCard from '../components/elements/PolaroidCard';
import '../styles/body.css';
import '../styles/portfolio.css';
import '../styles/PolaroidCard.css';



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
    { r: 241, g: 198, b: 255 }, //pink
    { r: 29, g: 222, b: 206 } //blue
  ];

  const buildCards = () => {
    return Object.keys(data).map((key, index) => (
      <PolaroidCard
        key={index}
        classNameHeader={data[key].classNameHeader}
        angle={data[key].angle}
        x={data[key].x}
        y={data[key].y}
        caption={data[key].caption}
        longDescription={data[key].longDescription}
        frontEnd={data[key].frontEnd}
        backEnd={data[key].backEnd}
        leveragedSoftware={data[key].leveragedSoftware}
        cta={data[key].cta}
        github={data[key].github}
        title={data[key].title}
      />
    ));
  };


  return (
    <div className='portfolio'>
      <NavBar color="#6144B8" />
      <Header colors={colors} />
      <div
        className='page-body'
        style={{ top: top }}
      >

        <div className='top-section'>
          <div className="carousel-heading">
            <h2>My <span>Projects</span></h2>
            <SectionStart color="#6144B8" />
          </div>

          <div className="polaroid-card-container">
            {buildCards()}
          </div>

        </div>

        <SkillsBox />
        <ContactForm variant='filled' />

      </div>
    </div>
  )
};

export default PortfolioPage;