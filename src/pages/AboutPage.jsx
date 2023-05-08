import React, { useState, useEffect, useRef } from 'react';
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


const AboutPage = () => {
  const contactRef = useRef(null);


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
    <div style={{ position: 'relative' }}>
      <NavBar />
      <SideBar />
      <Header />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: top,
          zIndex: 100,
          backgroundColor: 'rgb(255, 255, 255)',
          overflow: 'auto',
          padding: '0 20px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.3)'
        }}
      >
        <div className="carousel-heading">
          <h2>my<span>Story</span></h2>
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