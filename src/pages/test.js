import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';
import passionProjects from '../images/passion-projects.png'
import diploma from '../images/diploma.png'
import bws2 from '../images/2.0.png'
import communicatingAlgorithms from '../images/communicating-algorithms.png'
import crm from '../images/crm.png'
import running from '../images/face.jpeg'
import athletigen from '../images/athletigen.png'
import marathon from '../images/marathon.jpeg'

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: 150,
          zIndex: 100,
          backgroundColor: 'rgb(255, 255, 255)',
          overflow: 'auto',
          height: '100vh',
          minHeight: '100% !important',
          padding: '0 20px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.3)'
        }}
      >
        <div className="carousel-heading"
          style={{
            width: '100%',
            marginBottom: '50px'
          }}
        >
          <h2><span>About</span> me</h2>
          <p>Hi there,</p>
          <p>My name is Lauren.</p>
          <p

          >
            Here is the story of how my passions led me to become a full-stack web developer.</p>
        </div>
        <Timeline>
          <Events>
          
          <ImageEvent
              date="August 2014"
              text="I ran my first marathon when I graduated from high school. To this day, running helps me debug my code and find effective solutions."
              src={marathon}
              alt="athletigen and altis"
            >
            </ImageEvent>
            <ImageEvent
              date="January 2015 - September 2016"
              text="My first internship was translating scientific research to app developers. Our company tracked recovery metrics in elite athletes at the ALTIS training center in Phoenix Arizona."
              src={athletigen}
              alt="project collage"
            >
            </ImageEvent>
            <YouTubeEvent
              date="September 2016 - April 2018"
              text="I worked with Dalhousie Varsity Athletics and Kinduct to create a coaching analytics program. This is where I first dabbled in coding using VBA. It's pretty cool to see that the program is now being offered varsity-wide!"
              id="5HW1dRH6yk8"
              alt="video summary of program"
            >
            </YouTubeEvent>
            <TextEvent date="May 2016" text="Awarded Trainer of the Year" />
            <TextEvent date="May 2018" text="Awarded CCR for out of classroom contributions" />
            <TextEvent date="May 2019" text="Graduated with BSc Kinesiology" />
            <TextEvent date="November 2020" text="Became a Certified Strengthening and Conditioning Specialist with the NSCA" />
            <ImageEvent
              date="September 2019 - April 2020"
              text="I trained for a 50k race. I enjoy preparing for endurance events in my free time."
              src={running}
              alt="project collage"
            >
              <div>
                <UrlButton href="https://www.fitfirst.ca/blog/not-racing?fbclid=IwAR0FO3KwQFnSZsOgMgATa3UYMy_hCYKS2iQXNyx-dtW_1HIxqkO3klyTGb0">
                  Check out this blog post!
                </UrlButton>
              </div>
            </ImageEvent>
            <ImageEvent
              date="August 2020 - April 2022"
              text="I contributed to the development of our company's CRM by utilizing an integrated tech stack consisting of Hubspot, Zapier, Shopify, and linked Google Sheets."
              src={crm}
              alt="project collage"
            >
            </ImageEvent>
            <ImageEvent
              date="January 2021 - April 2022"
              text="I realized my affinity for programming when I started creating fully functional spreadsheets to model the MVP for our app development projects. This allowed me to effectively communicate the project requirements throughout the team."
              src={communicatingAlgorithms}
              alt="project collage"
            >
            </ImageEvent>
            <ImageEvent
              date="May 2022 - September 2022"
              text="I managed a project that sold 1000+ courses in the first month! To ensure consistent branding and to help the designers, I upskilled in CSS."
              src={bws2}
              alt="project collage"
            >
            </ImageEvent>
            <ImageEvent
              date="March 2023"
              text="After years of working alongside developers, I finally earned a diploma in web development, allowing me to pursue my passion full-time."
              src={diploma}
              alt="diploma in web development"
            >
            </ImageEvent>

            <ImageEvent
              date="2023 - present"
              text="Presently, I love working on new projects. In fact, my latest project is a super fun app that transforms your everyday diet into an epic space adventure!"
              src={passionProjects}
              alt="project collage"
            >
              <div>
                <UrlButton href="https://unsplash.com/search/photos/undersea">
                  View more projects
                </UrlButton>
              </div>
            </ImageEvent>

            
            

            

            

            

            

            

            
          </Events>
        </Timeline>
      </div>
      < Footer />
    </div>
  )
}

export default AboutPage