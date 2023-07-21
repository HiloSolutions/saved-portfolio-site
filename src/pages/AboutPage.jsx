import React, { useState, useEffect } from 'react';
import TypingAnimation from '../components/TypedText';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import SkillsBox from '../components/SkillsBox';
import ContactForm from '../components/ContactForm';
import SectionStart from '../components/elements/SectionStart';
//import SubSectionStart from '../components/elements/SubSectionStart';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import data from '../scripts/timeline';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'
import '../styles/home.css'
import { FaRunning } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import { GrPersonalComputer } from 'react-icons/gr';
import '../styles/about.css';


const AboutPage = () => {
  


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
    { r: 184, g: 68, b: 97 }, //pink
    { r: 184, g: 155, b: 68 }, //gold
    { r: 184, g: 155, b: 68 }, //gold
    { r: 68, g: 184, b: 184 }, //teal
  ];


  const createTemelineItems = Object.keys(data).map((key) => {
    const item = data[key];

    let icon = 'rgb(33, 150, 243)';
    if (item.tag === 'hobby') {
      icon = <FaRunning />;
    }
    if (item.tag === 'work') {
      icon = <GrPersonalComputer />;
    }
    if (item.tag === 'education') {
      icon = <MdOutlineSchool />;
    }
    if (item.tag === 'award') {
      icon = <FaAward />;
    }



    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(238, 238, 238)', color: '#111' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(238, 238, 238)' }}
        date={item.date}
        iconStyle={{ background: 'rgb(238, 238, 238)', color: '#000' }}
        icon={icon}
        key={item.title}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    );
  });


  return (
    <div className='about'>
      <NavBar color="#b86144"/>
      <SideBar />
      <Header colors={colors}/>
      <div
        className='page-body'
        style={{ top: top }}
      >
        <div className="carousel-heading">
          <h2>My<span> Story</span></h2>
          <TypingAnimation text="How passion led to full-stack web development." />
        </div>

        <SectionStart />

        <div style={{ marginTop: '3em' }}>
          <VerticalTimeline>
            {createTemelineItems}
          </VerticalTimeline>
        </div>

        <SkillsBox />
        <ContactForm variant='filled'/>
      </div>

    </div>
  )
}

export default AboutPage